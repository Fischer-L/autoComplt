var gulp = require('gulp'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('build', function() {
    gulp.src(['autoComplt.js'])
        .pipe(rename('autoComplt.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('build/'));
});
