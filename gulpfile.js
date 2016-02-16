var gulp = require("gulp");
var webserver = require('gulp-webserver');

gulp.task("default", ["webserver"]);

gulp.task("webserver", function() {
  return gulp.src("./src")
    .pipe(webserver({
      livereload: true,
      directoryListening: true,
      open: true,
      port: 3030
    }));
});
