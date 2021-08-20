var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");
var minify = require("gulp-clean-css");
var prefix = require("gulp-autoprefixer");

function compileScss() {
	return gulp
		.src("src/styles/main.scss")
		.pipe(sass())
		.pipe(prefix("last 2 versions"))
		.pipe(concat("styles.css"))
		.pipe(minify())
		.pipe(gulp.dest("src/styles/"));
}

function watchFiles() {
	gulp.watch("src/styles/**/*.scss", compileScss);
}

exports.default = gulp.series(compileScss, watchFiles);
