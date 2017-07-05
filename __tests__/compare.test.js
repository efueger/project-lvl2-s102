import gendiff from '../src';
import fs from 'fs';

test('Compare JSON files', () => {
  const fileBefore = '__tests__/compare-json-before';
  const fileAfter = '__tests__/compare-json-after';
  const result = fs.readFileSync('__tests__/compare-json-result').toString();
  expect(gendiff(fileBefore, fileAfter)).toBe(result);
});
