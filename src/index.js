import fs from 'fs';
import path from 'path';

import yaml from 'js-yaml';
import ini from 'ini';

import _ from 'lodash';

const getParseMethod = (pathname) => {
  const ext = path.extname(pathname).toLowerCase();
  switch (ext) {
    case '.json':
      return JSON.parse;
    case '.yaml':
      return yaml.safeLoad;
    case '.ini':
      return ini.decode;
    default:
      throw new Error(`Extension ${ext} not supported`);
  }
};

const getObject = pathname =>
  getParseMethod(pathname)(fs.readFileSync(pathname).toString());

export default (pathBefore, pathAfter) => {
  const objBefore = getObject(pathBefore);
  const objAfter = getObject(pathAfter);

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
