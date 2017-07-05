install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js __tests__/compare-json-before __tests__/compare-json-after

publish:
	npm publish

lint:
	npm run eslint -- src

test:
	npm test