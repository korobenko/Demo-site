var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');

var css = [
    'fonts/font-awesome.min.css',
    'css/normalize.css',
    'css/grid.css',
    'css/jq-rating.css',
    'css/slick.css',
    'css/toastr.css',
    'css/dropdown.css',
    'css/popup.css',
    'css/tabs.css',
    'css/counter.css',
    'css/style.css'
];

var js = [
    'js/jquery.js',
    'js/jquery-ui.1.11.4.js',
    'js/jquery.validete.min.js',
    'js/jq-rating.min.js',
    'js/slick.js',
    'js/toastr.min.js',
    'js/jquery.maskedinput.js',
    'js/header.js',
    'js/dropdown.js',
    'js/popup.js',
    'js/counter.js',
    'js/tabs.js',
    'js/forms.js',
    'js/sliders.js',
    'js/rating.js',
    'js/product-gallery.js',
    'js/catalog.js',
    'js/script.js'
];

gulp.task('html', function() {
  gulp.src(['templates/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
    return sass('css/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('css/'));
});

gulp.task('styles', function () {
    gulp.src(css)
        .pipe(sourcemaps.init())
        .pipe(concat("all.css"))
        .pipe(minifyCSS())
        .pipe(rename("all.min.css"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('builds/'));
});

gulp.task('scripts', function () {
    gulp.src(js)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename("all.min.js"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('builds/'));
});

gulp.task('watch', function () {
    gulp.watch('templates/*.html', ['html']);
    gulp.watch('templates/*/*.html', ['html']);
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch(css, ['styles']);
    gulp.watch(js, ['scripts']);
});

gulp.task('default', ['html', 'sass', 'styles', 'scripts', 'watch']);
//gulp.task('default', ['html', 'styles', 'scripts', 'watch']);
