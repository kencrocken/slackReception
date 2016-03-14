'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var _ = require('lodash');

// SVG SPRITES
gulp.task('sprites', function () {

    return gulp.src([ path.join(conf.paths.src, '/assets/svg/*.svg' )])
    .pipe($.svgmin({ plugins: [
        { cleanupIDs: false },
        { removeDoctype: false }, 
        { removeComments: true },
        { cleanupNumericValues: 
            { floatPrecision: 2 }
        }, 
        { convertColors: 
            { names2hex: true,
              rgb2hex: false
            }
        }]
    }))
    .pipe($.svgSymbols({
        id:      'icon-%f',
        className:  '.icon-%f',
        title:      false,
        fontSize:   32,
        templates: [ path.join(__dirname, 'svg-icons.svg'),'default-demo' ]
    })
    .on('error', conf.errorHandler('Sprites')))
    .pipe($.if( /[.]svg$/, gulp.dest(path.join(conf.paths.tmp, '/serve'))))
    .pipe($.if( /[.]html$/, gulp.dest('./')));
});