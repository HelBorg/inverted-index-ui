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
                exec: 'npm run start'
            },
            npm_build: {
                exec: 'npm run build'
            }
        }
    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('start', ['run:npm_start']);
    grunt.registerTask('default', function() {
        grunt.task.run('run:npm_install');
        grunt.task.run('run:npm_start');
    });
    grunt.registerTask('build', ['run:npm_build']);

};