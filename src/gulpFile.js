var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var urlAdjuster = require('gulp-css-url-adjuster');
var jade = require('gulp-jade');


var srcPath = {
    jadeSrc: ["jade/**/*.jade", "!jade/test.jade"],
    imgSrc: ["**/*.png", "**/*.jpg", "**/*.svg"],
    cssSrc: ["**/*.css", "!node_modules/**/*.css"],
    jsSrc: [  "**/*.js", "!gulpFile.js", "!node_modules/**/*.js"]
}

var distSrc = {
    dist: "../dist/",
    distImg: "../dist/img/"
}

gulp.task('buildForLeha', function() {
    gulp.src(srcPath.jadeSrc)
    .pipe(jade({
    }))
    .pipe(gulp.dest(distSrc.dist))

    gulp.src(srcPath.cssSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("styles.css")).pipe(urlAdjuster({
        replace: ['img/', '../img/NewTemplate/img/']
    })).pipe(urlAdjuster({
        replace: ['fonts/', '../fonts/']
    }))
    .pipe(gulp.dest(distSrc.dist));



    gulp.src(srcPath.jsSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("script.js")).pipe(gulp.dest(distSrc.dist));


    gulp.src("fonts/**/*.*",  { base: './' }).pipe(gulp.dest("../dist/"));
    gulp.src(srcPath.imgSrc).pipe(rename({
        dirname: ''
    })).pipe(gulp.dest(distSrc.distImg));
});

gulp.task('build', function() {
    gulp.src(srcPath.jadeSrc)
    .pipe(jade({
        pretty : "\t"
    }))
    .pipe(gulp.dest(distSrc.dist))

    gulp.src(srcPath.cssSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("styles.css")).pipe(gulp.dest(distSrc.dist));

    gulp.src(srcPath.jsSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("script.js")).pipe(gulp.dest(distSrc.dist));


    gulp.src("fonts/**/*.*",  { base: './' }).pipe(gulp.dest("../dist/"));
    gulp.src(srcPath.imgSrc).pipe(rename({
        dirname: ''
    })).pipe(gulp.dest(distSrc.distImg));
});

gulp.task('watch', function() {
    gulp.watch(Object.values(srcPath), ["build"]);
});
