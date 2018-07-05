const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixr = require('gulp-autoprefixer');

/* Se crear a continuación las tareas */

gulp.task('sass', () => {
    gulp.src('scss/app.scss')
        .pipe(autoprefixr({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
});
gulp.task('watch', ['sass'], () => {
    gulp.watch(['scss/*.scss'], ['sass']);
});