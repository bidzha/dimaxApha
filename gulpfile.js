const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', () => {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('prefix', () =>
    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
);

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/index.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch', 'html'));