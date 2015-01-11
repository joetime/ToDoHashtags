/// <vs BeforeBuild='cssmin, pkg, uglify' />
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n'
            },
            build: {
                src: 'js/*.js',
                dest: 'dist/js/app.min.js'
            }
        },
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-sanitize/angular-sanitize.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                ],
                dest: 'dist/js/vendor.js',
            },
        },
        cssmin: {
            options: {
                separator: '\n'
            },
            target: {
                files: {
                    'dist/css/app.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'css/*.css'
                    ]
                }
            }
        },
        
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // TODO: add Grunt watch
    // TODO: add jasmine/qunit/mocha tests

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat', 'cssmin']);

};