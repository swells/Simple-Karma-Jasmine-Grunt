module.exports = function(grunt) {

  // --- Load the plugins ---
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // --- Project configuration ---
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    karma: {
      unit: {
        configFile: 'config/karma.conf.js'
      }
    },

    clean: ['build', 'test-results.xml'],

    copy: {
      stage: {
        files: [{
          src: ['lib/**'],
          dest: 'build/assets/'
        }, {
          src: ['src/js/hello-world.js'],
          dest: 'build/assets/js/hello-world.js',
          filter: 'isFile'
        }]
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/assets/js/<%= pkg.name %>.min.js'
      }
    }

  });

  // --- TASKS ---

  // Default task
  grunt.registerTask('default', ['clean', 'uglify', 'copy']);
  grunt.registerTask('clean-all', ['clean']);

  // Tests
  grunt.registerTask('test', ['karma']);

};