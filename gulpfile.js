var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', () => {
    console.log('Hurray, you created a gulp task');
});

gulp.task('html', () => {
    console.log("imagine somehing usueful being done to your html here");
});

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
});