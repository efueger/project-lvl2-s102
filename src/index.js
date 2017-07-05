import fs from 'fs';
import _ from 'lodash';

export default (fileBefore, fileAfter) => {
  const objBefore = JSON.parse(fs.readFileSync(fileBefore));
  const objAfter = JSON.parse(fs.readFileSync(fileAfter));

  const compare = _.union(Object.keys(objBefore), Object.keys(objAfter))
    .reduce((acc, key) => {
      if (objBefore[key] === objAfter[key]) {
        return acc.concat(`  ${key}: ${objBefore[key]}`);
      } else if (!objBefore[key]) {
        return acc.concat(`+ ${key}: ${objAfter[key]}`);
      } else if (!objAfter[key]) {
        return acc.concat(`- ${key}: ${objBefore[key]}`);
      }
      return acc.concat(`+ ${key}: ${objAfter[key]}`,
        `- ${key}: ${objBefore[key]}`);
    }, []);

  return `{\n  ${compare.join('\n  ')}\n}`;
};
