const { src, dest, watch } = require('gulp');
const minifyJs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const jsFiles = [
  './src/jquery.min.js',
  './slider/dist/js/unslider-min.js',
  './src/app.js',
];
const bundleJs = () => {
  return src(jsFiles)
    .pipe(sourceMaps.init())
    .pipe(minifyJs())
    .pipe(concat('bundle.js'))
    .pipe(sourceMaps.write())
    .pipe(dest('./src/'));
};

const devWatch = () => {
  watch('./src/*.js', bundleJs);
};

exports.bundleJs = bundleJs;
exports.devWatch = devWatch;

const styleFiles = [
  './fontawesome/css/all.min.css',
  './slider/dist/css/unslider.css',
  './styles/style.css',
];

const minifyCss = require('gulp-clean-css');
const bundleCss = () => {
  return src(styleFiles)
    .pipe(sourceMaps.init())
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat('bundle.css'))
    .pipe(dest('./styles/'));
};
exports.bundleCss = bundleCss;

const sass = require('gulp-sass')(require('sass'));
const bundleScss = () => {
  return src('./styles/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().once('error', sass.logError))
    .pipe(minifyCss())
    .pipe(dest('./styles/'));
};
exports.bundleScss = bundleScss;
