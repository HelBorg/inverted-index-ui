module.exports = function(grunt) {

// ===========================================================================
    var excludes = [
        '!**/node_modules/**'
    ];
    // CONFIGURE GRUNT ===========================================================

    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),


        babel: {
            options: {
                sourceMap: false,
                presets: ["@babel/env", "@babel/react"],
                plugins: ["transform-es2015-modules-amd"]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: ['*.js'],
                    dest: './generated',
                    ext: '.js'
                }]
            }
        },

        run: {
            npm_install: {
                cmd: 'npm',
                args: [
                    'install'
                ]
            },
            npm_start: {
                cmd: 'npm',
                args: [
                    'start'
                ]
            }
        },
        excludes : excludes,

        connect: {
            server: {
                options: {
                    port: 9001,
                    // open a browser
                    open : true,
                    // inject livereload.js into the pages
                    livereload : true
                }
            }
        },
        sass: {
            compile: {
                options: {
                    // expanded for dev
                    style: 'expanded',
                    // compressed for prod
                    // style: 'compressed',
                    // if you're using compass
                    compass : true,
                    // line numbers of scss in the css for debugging
                    // lineNumbers : true,
                    // set up sourcemaps, requires SASS 3.3 and Compass 1.0alpha?
                    sourcemap : true
                },
                files: {
                    // list your css and corresponding scss pages here
                    // I usually just import all partials into style.scss
                    'style.css': 'style.scss'
                }
            }
        },
        watch : {
            options: {
                livereload: true
            },
            // make a subtask for each filetype to selectively run tasks and livereload
            html: {
                files: [
                    '**/*.html',
                    '<%= excludes %>'
                ],
            },
            js: {
                files: [
                    '**/*.js',
                    '<%= excludes %>'
                ],
                tasks: [],
            },
            // don't livereload sass because we livereload the css
            sass: {
                options: {
                    livereload: false
                },
                files: [
                    '**/*.scss',
                    '<%= excludes %>'
                ],
                // compile on save
                tasks: ['sass'],
            },
            css: {
                files: [
                    '**/*.css',
                    '<%= excludes %>'
                ],
                tasks: []
            }
        }


    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================

    grunt.registerTask('logger', 'Log some stuff.', function() {
        grunt.log.write('Executing npm build').ok();
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('build', ['babel']);
    grunt.registerTask('default', [ 'run:npm_install', 'run:npm_start' ]);
    grunt.registerTask('default2', [
        'sass',
        'connect',
        'watch'
    ]);

    grunt.initConfig({

        // add excludes to the grunt object for access later
        excludes : excludes,

        connect: {
            server: {
                options: {
                    port: 9001,
                    // open a browser
                    open : true,
                    // inject livereload.js into the pages
                    livereload : true
                }
            }
        },
        sass: {
            compile: {
                options: {
                    // expanded for dev
                    style: 'expanded',
                    // compressed for prod
                    // style: 'compressed',
                    // if you're using compass
                    compass : true,
                    // line numbers of scss in the css for debugging
                    // lineNumbers : true,
                    // set up sourcemaps, requires SASS 3.3 and Compass 1.0alpha?
                    sourcemap : true
                },
                files: {
                    // list your css and corresponding scss pages here
                    // I usually just import all partials into style.scss
                    'style.css': 'style.scss'
                }
            }
        },
        watch : {
            options: {
                livereload: true
            },
            // make a subtask for each filetype to selectively run tasks and livereload
            html: {
                files: [
                    '**/*.html',
                    '<%= excludes %>'
                ],
            },
            js: {
                files: [
                    '**/*.js',
                    '<%= excludes %>'
                ],
                tasks: [],
            },
            // don't livereload sass because we livereload the css
            sass: {
                options: {
                    livereload: false
                },
                files: [
                    '**/*.scss',
                    '<%= excludes %>'
                ],
                // compile on save
                tasks: ['sass'],
            },
            css: {
                files: [
                    '**/*.css',
                    '<%= excludes %>'
                ],
                tasks: []
            }
        }

    });

};