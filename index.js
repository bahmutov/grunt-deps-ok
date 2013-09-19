module.exports = function(grunt) {

  grunt.initConfig({});
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-deps-ok');

  var description = 'Quickly checks top level dependencies.';
  grunt.registerTask('deps', description, function(type) {
    grunt.task.run();
  });
};
