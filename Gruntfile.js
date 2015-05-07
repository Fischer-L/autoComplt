module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		watch : {
			
			options : {			
				cwd : "<%= uglify.js_min.cwd %>"
			},
			
			uglify : {				
				tasks : "uglify:js_min",			
				files : [ "<%= uglify.js_min.src %>", "!*<%= uglify.js_min.ext %>" ]
			}
		},
		
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);

};