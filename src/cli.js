import program from 'commander';
import pjson from '../package.json';
import gendiff from '.';

export default () =>
  program.version(pjson.version)
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => console.log(gendiff(firstConfig, secondConfig)))
    .description(pjson.description)
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
