/*
 * grunt-deps-ok
 * https://github.com/bahmutov/grunt-deps-ok
 *
 * Copyright (c) 2013 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var depsOk = require('deps-ok');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var txt = 'Quickly checks if top level dependencies' +
    ' are missing or out of date';

  grunt.registerTask('deps_ok', txt, function() {
    var verbose = false;
    var ok = depsOk(process.cwd(), verbose);
    if (!ok) {
      grunt.log.error('problem with dependencies, probably run `npm install`');
      return false;
    }

    grunt.log.writeln('dependencies are ok');
  });
};
