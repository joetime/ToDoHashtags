module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n'
            },
            build: {
                src: 'js/*.js',
                dest: 'js/build/app.min.js'
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
                dest: 'js/build/vendor.js',
            },
        },
        cssmin: {
            target: {
                files: {
                    'css/build/app.css': ['css/*.css']
                }
            }
        },
        
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat', 'cssmin']);

};