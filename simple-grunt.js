module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      'dist/all.js': ['src/*.js']
    },
    uglify: {
      'dist/all.min.js': ['dist/all.js']
    },
    jshint: {
      files: ['src/*.js']
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['jshint', 'concat', 'uglify']
    },
    
    browserify: {
      debug: {
        options: {
          browserifyOptions: {
            standalone: 'Mosaico'
          },
          watch: true,
        },
        files: {
          'build/mosaico.js': ['./src/js/app.js', './build/templates.js']
        }
      },
      main: {
        options: {
          browserifyOptions: {
            debug: true,
            fullPaths: false,
            // standalone: 'Mosaico'
          },
          transform: ['uglifyify'],
          watch: true,
        },
        files: {
          'build/mosaico.debug.js': ['./src/js/app.js', './build/templates.js']
        }
      }
    },

  });

  // Load Our Plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Default Task
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
