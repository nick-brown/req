module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
        options: { livereload: true },

        scripts: {
            files: ['scripts/*.js'],
            tasks: ['jshint']
        },

        html: { 
            files: ['index.html']
        }
    },

    jshint: {
        options: {
            reporter: require('jshint-stylish')        
        },

        build: ['Gruntfile.js', 'scripts/*.js']
    }
  });

  // Load the plugin that provides the tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'watch']);

};
