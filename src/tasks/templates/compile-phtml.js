/**
 * @file phtml编译任务
 * @author mengchen <sisimengchen@gmail.com>
 * @module package
 */
const gulp = require("gulp");
const gulpif = require("gulp-if");
const printer = require("../../gulp-plugin/gulp-printer");
const changed = require("gulp-changed");
const replace = require("gulp-replace");
const inlinesource = require("gulp-inline-source");

const { getOptions } = require("../../config");
const template = require("gulp-template");
const { isURL, isDataURI, swallowError, extname } = require("../../util");
const path = require("path");
const globalOptions = getOptions();

const includeTplReg = /(\$this\s*->\s*includeTpl\s*\(['"])(\S*)(['"])/gi;

function phtmlCompile() {
  return gulp
    .src(globalOptions.getGulpSrc("phtml"))
    .pipe(changed(globalOptions.getGulpDest()))
    .pipe(printer(filepath => `phtml编译任务 ${filepath}`))
    .pipe(
      replace(getOptions.urlReg, function(match, str) {
        let source = str.replace(/\#[^\#]+$/, "");
        try {
          const resourcePath = globalOptions.resolve(source, this.file.path);
          const module = globalOptions.getModule(resourcePath);
          source = module.url;
        } catch (error) {
        } finally {
          return `\'${source}\'`;
        }
      })
    )
    .pipe(
      // 如果是开发环境解析补全includeTpl的路径
      gulpif(
        globalOptions.isDevelopENV(),
        replace(includeTplReg, function(match, p1, p2, p3, str) {
          let source = p2;
          if (!source.endsWith(".phtml")) {
            source = `${source}.phtml`;
          }
          try {
            const resourcePath = globalOptions.resolve(source, this.file.path);
            source = resourcePath;
          } catch (error) {
          } finally {
            return `${p1}${source}${p3}`;
          }
        })
      )
    )
    .pipe(inlinesource())
    .on("error", swallowError)
    .pipe(gulp.dest(globalOptions.getGulpDest()));
}

module.exports = phtmlCompile;