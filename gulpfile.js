let { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function fnCopyIndex() {
    return src('./src/index.html').pipe(dest('./dist'));
}
function fnLib() {
    return src(['./src/lib/**/*', './src/lib/**']).pipe(dest('./dist/lib'));
}
function fnData() {
    return src(['./src/data/**/*', './src/data/**']).pipe(dest('./dist/data'));
}
function fnHTML() {
    return src('./src/html/**/*.html')
        .pipe(htmlmin())
        .pipe(dest('./dist/html'));
}
function fnCSS() {
    return src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/css'))
}
function fnJS() {
    return src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/js'));
}
function fnImg() {
    return src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
}
function fnWatch() {
    watch('./src/index.html', fnCopyIndex);
    watch('./src/html/**/*.html', fnHTML);
    watch('./src/img/**/*', fnImg);
    watch('./src/js/**/*.js', fnJS);
    watch('./src/scss/**/*.scss', fnCSS);
    watch('./src/lib/**/*', fnLib);
    watch('./src/data/**/*', fnData);
}
exports.copyIndex = fnCopyIndex;
exports.html = fnHTML;
exports.img = fnImg;
exports.js = fnJS;
exports.css = fnCSS;
exports.lib = fnLib;
exports.data = fnData;
exports.default = fnWatch;