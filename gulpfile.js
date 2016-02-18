var gp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gp.task('uglify', function () {
  return gp.src('./src/autoComplt.js')
    .pipe(uglify())
    .pipe(rename('autoComplt.min.js'))
    .pipe(gp.dest('./src'));
});
