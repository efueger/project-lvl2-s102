import gendiff from '../src';
import fs from 'fs';

test('compare', () => {
  const fileBefore = '__tests__/compareBefore';
  const fileAfter = '__tests__/compareAfter';
  const result = fs.readFileSync('__tests__/compareResult').toString();
  expect(gendiff(fileBefore, fileAfter)).toBe(result);
});
