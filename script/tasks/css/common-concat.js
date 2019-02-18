/**
 * @file 公共css处理任务
 * @author mengchen <mengchen002@ke.com>
 * @module package
 */
const gulp = require("gulp");
const cached = require("gulp-cached");
const remember = require("gulp-remember");
const concat = require("gulp-concat");
const printer = require("../../gulp-plugin/gulp-printer");
const { getOptions } = require("../../config");

const globalOptions = getOptions();

module.exports = function() {
  return gulp.task("css:common:concat", done => {
    return gulp
      .src(globalOptions.getGulpCommon4Dest("css"))
      .pipe(cached("css:common:concat"))
      .pipe(printer(filepath => `css:common:concat: ${filepath}`))
      .pipe(remember("css:common:concat"))
      .pipe(concat("common.css"))
      .pipe(gulp.dest(globalOptions.getCommonDest()));
  });
};
