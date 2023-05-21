#!/usr/bin/env node
const { program } = require('commander');
const { name, version, description} = require('../package.json');
program
   .name(name)
   .version(version)
   .description(description);
program.parse();

