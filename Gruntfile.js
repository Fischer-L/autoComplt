module.exports = function(grunt) {

    // Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		uglify : {
			js_min : {
				expand : true,
				cwd : "src/",
				src : "*.js",
				dest : "src/",
				ext : ".min.js"
			}
		}
	});

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};