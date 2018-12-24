const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', (done) => {
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
    done();
});

gulp.task('watch', () => {
    gulp.watch('scss/*.scss')
        .on('change', gulp.series('sass'));
})