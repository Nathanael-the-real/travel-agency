var gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('default', function () {
  console.log("Hi there ! Mission complete - you created a Gulp task.");
});

gulp.task('html', function () {
  console.log("Image the people here.");
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/style.css')
    .pipe(gulp.dest('.'))
    .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function () {

  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  })
});