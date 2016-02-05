module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        modernizr_builder: {
            build: {
                options: {
                    config: './config.json',
                    dest: './modernizr-custom.js'
                }
            }
        }
    });

    // Load the plugin that provides the "modernizr_builder" task.
    grunt.loadNpmTasks('grunt-modernizr-builder');

    // Default task(s).
    grunt.registerTask('default', ['modernizr_builder']);

};
