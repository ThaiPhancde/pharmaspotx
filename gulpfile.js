const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

// Bundle CSS
gulp.task('css', function() {
    return gulp.src([
        'assets/css/**/*.css',
        'assets/plugins/**/*.css'
    ])
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'));
});

// Bundle JS
gulp.task('js', function() {
    return gulp.src([
        'assets/js/**/*.js',
        'assets/plugins/**/*.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(minify({
        ext: {
            min: '.min.js'
        }
    }))
    .pipe(gulp.dest('public/js'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('assets/css/**/*.css', gulp.series('css'));
    gulp.watch('assets/js/**/*.js', gulp.series('js'));
});

// Default task
gulp.task('default', gulp.series('css', 'js', 'watch'));