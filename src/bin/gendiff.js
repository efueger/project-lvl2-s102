#!/usr/bin/env node

import program from 'commander';
import compareFiles from '../compare-files';

program.version('0.0.3')
  .usage('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);

export default compareFiles;
