import fs from 'fs';

export default (fileBefore, fileAfter) => {
  const before = JSON.parse(fs.readFileSync(fileBefore));
  const beforeKeys = Object.keys(before);
  const after = JSON.parse(fs.readFileSync(fileAfter));
  const afterKeys = Object.keys(after);

  const changeBefore = beforeKeys.reduce((acc, key) => {
    if (!afterKeys.includes(key)) {
      return acc.concat(`- ${key}: ${before[key]}`);
    } else if (before[key] === after[key]) {
      return acc.concat(`  ${key}: ${before[key]}`);
    }
    return acc.concat(`+ ${key}: ${after[key]}`,
      `- ${key}: ${before[key]}`);
  }, []);
  const changeAfter = afterKeys.reduce((acc, key) => {
    if (!beforeKeys.includes(key)) {
      return acc.concat(`+ ${key}: ${after[key]}`);
    }
    return acc;
  }, changeBefore);

  return `{\n  ${changeAfter.join('\n  ')}\n}`;
};
