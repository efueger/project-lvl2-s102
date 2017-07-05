import gendiff from '../src';
import fs from 'fs';

test('Compare JSON files', () => {
  const fileBefore = '__tests__/compare/json/before.json';
  const fileAfter = '__tests__/compare/json/after.json';
  const result = fs.readFileSync('__tests__/compare/json/result.txt').toString();
  expect(gendiff(fileBefore, fileAfter)).toBe(result);
});
