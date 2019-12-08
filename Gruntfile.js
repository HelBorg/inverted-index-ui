module.exports = function(grunt) {

// ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            npm_install: {
                exec: 'npm install'
            },
            npm_start: {
                exec: 'npm start'
            }
        }


    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('start', ['run:npm_start']);
    grunt.registerTask('default', [ 'run:npm_install', 'run:npm_start' ]);

};