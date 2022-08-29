const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const {src, series, parallel, dest, watch} = require('gulp');

const cssPath = 'src/css/**/*.css';

function copyHtml() {
    return src('src/*.html').pipe(gulp.dest('dist'));
}

function cssTask() {
    return src(cssPath)
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}

exports.cssTask = cssTask;
exports.copyHtml = copyHtml;
exports.default = copyHtml;