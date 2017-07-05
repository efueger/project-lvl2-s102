import gendiff from '../src';
import fs from 'fs';

test('Compare JSON files', () => {
  const fileBefore = '__tests__/compare/json/before.json';
  const fileAfter = '__tests__/compare/json/after.json';
  const result = fs.readFileSync('__tests__/compare/json/result.txt').toString();
  expect(gendiff(fileBefore, fileAfter)).toBe(result);
});

test('Compare YAML files', () => {
  const fileBefore = '__tests__/compare/yaml/before.yaml';
  const fileAfter = '__tests__/compare/yaml/after.yaml';
  const result = fs.readFileSync('__tests__/compare/yaml/result.txt').toString();
  expect(gendiff(fileBefore, fileAfter)).toBe(result);
});

test('Compare INI files', () => {
  const fileBefore = '__tests__/compare/ini/before.ini';
  const fileAfter = '__tests__/compare/ini/after.ini';
  const result = fs.readFileSync('__tests__/compare/ini/result.txt').toString();
  expect(gendiff(fileBefore, fileAfter)).toBe(result);
});
