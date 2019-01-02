var gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('default', function () {
  console.log("Hi there ! Mission complete - you created a Gulp task.");
});

gulp.task('html', function () {
  console.log("Image the people here.");
});

gulp.task('styles', function () {
  console.log("Image the people here loves sass.");
});

gulp.task('watch', function () {

  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  })
});