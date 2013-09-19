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

  grunt.registerTask('deps_ok',
    'Quickly checks if top level dependencies are missing or out of date',
    function() {
      var ok = depsOk(process.cwd(), true);
      grunt.log.writeln(this.name + ', dependencies ok?', ok);
    });
};
