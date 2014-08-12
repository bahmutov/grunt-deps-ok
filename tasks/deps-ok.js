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

module.exports = function(grunt) {

  function checkDeps(opts) {
    opts = opts || {};
    var verbose = opts.verbose || false;
    var force = opts.force || false;

    var ok = depsOk(process.cwd(), verbose);

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
      var options = this.options({
        verbose: false,
        force: false
      });
      return checkDeps(options);
    });
  } else {
    grunt.registerTask(taskName, taskDescription, checkDeps);
  }
};
