#!/usr/bin/env node
const { program } = require('commander');
const { name, version, description} = require('../package.json');
program
   .name(name)
   .version(version)
   .description(description)
   .option('-f, --format <type>', 'output format')
   .helpOption('-h, --help', 'output usage information')
   .argument('<filepath1> <filepath2>');

program.parse(process.argv);

const options = program.args;
console.log(options)