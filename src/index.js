import program from 'commander';
import compare from './compare';
import pjson from '../package.json';

export const cli = () =>
  program.version(pjson.version)
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => console.log(compare(firstConfig, secondConfig)))
    .description(pjson.description)
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);

export default compare;
