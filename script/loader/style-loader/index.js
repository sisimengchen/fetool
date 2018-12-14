const path = require("path");
const fs = require("fs");
const { getOptions } = require("../../config");
const { printer } = require("../../util");
const { template } = require("@babel/core");

const codeWrapper = template(`
  var NAME = _interopRequireDefault((function(style) {
    var useCount = 0;

    var headElement;
    var firstLinkElement;
    var styleElement;

    function use() {
      if (useCount++ > 0) {
        return;
      }

      if (!headElement) {
        headElement = document.head || document.getElementsByTagName('head')[0];
      }

      if (!firstLinkElement) {
        var linkElements = headElement.getElementsByTagName('link');
        for (var i = 0, l = linkElements.length; i < l; ++i) {
          if (linkElements[i].rel === 'stylesheet') {
            firstLinkElement = linkElements[i];
            break;
          }
        }
      }

      if (!styleElement) {
        styleElement = document.createElement('style');
        firstLinkElement ? headElement.insertBefore(styleElement, firstLinkElement) : headElement.appendChild(styleElement);
        styleElement.setAttribute('type', 'text/css');
        // styleElement.setAttribute('data-src', '<%= src%>');
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = style;
        } else {
          styleElement.appendChild(document.createTextNode(style));
        }
      } else {
        firstLinkElement ? headElement.insertBefore(styleElement, firstLinkElement) : headElement.appendChild(styleElement);
      }
    }

    function unuse() {
      if (useCount === 0) {
        return;
      }

      if (--useCount === 0) {
        headElement.removeChild(styleElement);
      }
    }

    return {
      use: use,
      unuse: unuse
    };
  })('VALUE'))
`);

const defaultOptions = {};

/**
 * [样式表文件依赖处理器]
 * @param  {[type]} { name, source, filename } [name: 当前所处理的依赖对应的变量名称, source: 当前所处理的依赖值, filename: 当前所处理的代码绝对路径]
 * @param  {[type]} options   [当前loader配置]
 * @return {[type]}          [处理之后的返回新source]
 */
module.exports = function({ name, source, filename }, options) {
  const globalOptions = getOptions();
  options = Object.assign({}, defaultOptions, options);
  let code;
  try {
    const resourcePath = globalOptions.resolve(source, filename);
    source = fs.readFileSync(resourcePath, "utf-8");
  } catch (error) {
    printer.error(error);
  } finally {
  }
  try {
    code = codeWrapper({ NAME: name, VALUE: source });
  } catch (error) {
    printer.error(error);
  }
  return {
    acitve: false,
    name,
    source,
    code
  };
};

// 由于less，scss，styl编译需要借助gulp来执行，因此resolve步骤可以从dist中取，需要优化
