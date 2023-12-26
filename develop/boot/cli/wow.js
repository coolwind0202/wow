#!/usr/bin/env node

/*
  Implemented with reference to:
  - https://yargs.js.org/
  - https://nodejs.org/api/process.html#processcwd
*/

import path from "path";
import createInitializedDir from "./lib/init/createInitializedDir";
import getTemplateDirPath from "../util/getTemplateDirPath";

require('yargs')
  .scriptName("wow")
  .usage('$0 <cmd> [args]')
  .command('init [template]', 'Initialize current dircetory.', {
    template: {
      type: "string",
      describe: "(option) Template directory path. CLI copies from the directory",
      normalize: true
    }
  }, function (argv) {
    console.log(`Initialize this directory: ${process.cwd()}\n`);

    if (argv.template != undefined) {
      console.log(`Template specified: ${argv.template}`);
    } else {
      console.log(`Use default template: ${getTemplateDirPath()}`);
    }

    createInitializedDir(process.cwd(), {
      options: argv.template
    });
  })
  .command("start", "Start wow server.", {
    port: {
      describe: "Port number you want to bind the server to",
      number: true
    }
  }, (argv) => {
    // start wow server.
  })
  .command("generate", "Generate files to local directory.", (yargs) => {
    yargs.command("component", "Generate component.", {
      name: {
        describe: "Component name"
      }
    }, (argv) => {
      // create component template to `local/name` dir.
    });
  })
  .help()
  .argv;
