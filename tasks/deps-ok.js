/*
 * grunt-deps-ok
 * https://github.com/bahmutov/grunt-deps-ok
 *
 * Copyright (c) 2013 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var taskName = 'deps-ok';
var taskDescription = 'Quickly checks if top level dependencies' +
  ' are missing or out of date';
var depsOk = require('deps-ok');

function isVerbose(option) {
  return option === '--verbose' || option === '-v';
}

function isForce(option) {
  return option === '--force' || option === '-f';
}

module.exports = function(grunt) {

  function checkDeps(opts) {
    opts = opts || {};
    var verbose = opts.verbose || false;
    var force = opts.force || false;
    var folder = opts.folder || process.cwd();
    var skipBower = opts.skipBower || false;

    var ok = depsOk(folder, verbose, skipBower);

    if (ok) {
      grunt.log.writeln('dependencies are ok');
      return true;
    }

    grunt.log.error('problem with dependencies, probably run `npm install`');
    if (opts.force) {
      return true;
    }
    return false;
  }

  if (grunt.config.data[taskName]) {
    grunt.registerMultiTask(taskName, taskDescription, function configuredCheckDeps() {
      grunt.verbose.writeln('deps-ok multi task mode');
      var options = this.options({
        verbose: false,
        force: false,
        folder: process.cwd(),
        skipBower: false
      });
      return checkDeps(options);
    });
  } else {
    grunt.registerTask(taskName, taskDescription, function depsOk() {
      grunt.verbose.writeln('deps-ok default task');
      // get arguments from command line manually
      var verbose = process.argv.some(isVerbose);
      var force = process.argv.some(isForce);
      return checkDeps({
        verbose: verbose,
        force: force
      });
    });
  }
};
