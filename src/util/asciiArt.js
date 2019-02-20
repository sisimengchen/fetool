/**
 * 内置一些字符画
 * @param {String} name 名称
 */

module.exports = function(name) {
  const ascii = asciiMap[name + ""];
  ascii && console.log(ascii);
};

const asciiMap = {
  fecool:
    "\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u000a\u0020\u0020\u0020\u002f\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u000a\u0020\u0023\u002f\u0020\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0023\u0023\u0023\u0023\u0020\u002f\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002f\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u002f\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u002f\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0023\u0023\u0023\u0020\u002f\u0020\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u002f\u0020\u0023\u0023\u0023\u0020\u0020\u002f\u0020\u0020\u002f\u0020\u0023\u0023\u0023\u0020\u0020\u002f\u0020\u002f\u0020\u0023\u0023\u0023\u0020\u0020\u002f\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0020\u002f\u0020\u0020\u0020\u0023\u0023\u0023\u0020\u0020\u0020\u002f\u0020\u0020\u0020\u0023\u0023\u0023\u002f\u0020\u0020\u002f\u0020\u0020\u0020\u0023\u0023\u0023\u002f\u0020\u002f\u0020\u0020\u0020\u0023\u0023\u0023\u002f\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0023\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0023\u0023\u0023\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u002f\u0020\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u002f\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0020\u0020\u0020\u0020\u000a\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0023\u002f\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0023\u002f\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0023\u0023\u0023\u0020\u002f\u0020\u000a\u0020\u0023\u0023\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u0023\u0023\u0020\u0020\u0020\u0020\u0020\u0020\u0023\u0023\u002f\u0020\u0020\u000a\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020",
  mokey:
    "\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u005f\u005f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002e\u002d\u0027\u0060\u0020\u0020\u0020\u0020\u0020\u0060\u0027\u002e\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u005f\u0020\u0020\u0020\u0020\u002f\u0020\u0020\u002e\u002d\u002e\u0020\u002e\u002d\u002e\u0020\u0020\u0020\u005c\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002e\u0027\u0060\u005f\u005f\u0060\u0027\u002e\u007c\u0020\u002f\u0020\u0020\u0028\u0029\u007c\u0020\u0020\u0028\u0029\u005c\u0020\u0020\u005c\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002f\u0020\u002f\u0060\u0020\u0020\u0020\u0060\u005c\u005c\u0020\u007c\u005f\u0020\u002e\u002d\u002e\u002d\u002e\u0020\u005f\u007c\u0020\u0020\u003b\u0020\u0020\u005f\u005f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u007c\u0020\u0020\u0020\u0020\u0020\u002e\u002d\u0027\u0060\u0020\u0020\u0028\u002f\u0060\u007c\u0060\u005c\u0029\u0020\u0060\u002d\u002e\u002f\u0027\u0060\u005f\u005f\u0060\u0027\u002e\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005c\u0020\u005c\u002e\u0020\u002e\u0027\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u002e\u0060\u0020\u0020\u0060\u005c\u0020\u005c\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u002d\u002e\u002f\u0020\u0020\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005c\u0020\u0020\u0020\u0020\u007c\u007c\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u0020\u007c\u005c\u0020\u0020\u0020\u0020\u0020\u0020\u0027\u0027\u0027\u0027\u002d\u002d\u002d\u002e\u005f\u005f\u0020\u0020\u0020\u007c\u005f\u002e\u002f\u0020\u002f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0027\u0020\u005c\u0020\u0060\u0027\u002d\u002d\u002d\u002e\u002e\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u007c\u0020\u0020\u002f\u002e\u002d\u0027\u0060\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u002e\u0060\u002e\u005f\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u002f\u0020\u0020\u002f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u002d\u002e\u005f\u0027\u002d\u002e\u005f\u005f\u005f\u005f\u005f\u002e\u002d\u0027\u0020\u005f\u002e\u0060\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u002c\u002d\u0027\u0027\u002e\u005f\u005f\u002e\u002e\u002e\u002d\u002d\u0027\u0060\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u002e\u002d\u0027\u005f\u002e\u0020\u0020\u0020\u0020\u002c\u002d\u002e\u0020\u005f\u0020\u0060\u0027\u002d\u002e\u005f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002e\u002d\u0027\u0020\u002c\u002d\u0027\u0020\u002f\u0020\u0020\u0020\u002f\u0020\u0020\u0020\u005c\u005c\u0060\u0027\u002d\u002e\u005f\u0020\u0060\u0027\u002e\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003c\u0060\u0020\u0020\u002c\u0027\u0020\u0020\u0020\u002f\u0020\u0020\u0020\u002f\u0020\u0020\u0020\u0020\u0020\u005c\u005c\u0020\u0020\u0020\u0020\u002f\u0020\u002f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u002e\u0020\u0020\u005c\u0020\u0020\u003b\u0020\u0020\u0020\u003b\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003b\u0027\u0020\u0020\u002f\u0020\u002f\u005f\u000a\u0020\u0020\u0020\u0020\u005f\u005f\u0020\u0020\u0020\u0028\u0060\u005c\u0060\u002e\u0020\u005c\u0020\u007c\u0020\u0020\u0020\u007c\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u007c\u002e\u0027\u0020\u002f\u002f\u0020\u0029\u000a\u0020\u002e\u0027\u0060\u005f\u0020\u0060\u005c\u0028\u0060\u0027\u002e\u0060\u002e\u005c\u005f\u005c\u007c\u0020\u0020\u0020\u007c\u0020\u0020\u0020\u0020\u006f\u0020\u0020\u007c\u002f\u005f\u002c\u0027\u002f\u002e\u0027\u0020\u0029\u000a\u002f\u0020\u002e\u0027\u0020\u0060\u003b\u0020\u007c\u0060\u002d\u002e\u005f\u0020\u0060\u0020\u002f\u003b\u0020\u0020\u0020\u0020\u005c\u0020\u0020\u0020\u0020\u0020\u002f\u0020\u005c\u0020\u0020\u0020\u005f\u002e\u002d\u0027\u000a\u007c\u0020\u007c\u0020\u0020\u0028\u005f\u002f\u0020\u0020\u0028\u005f\u002e\u002e\u002d\u0027\u0020\u005f\u005c\u0020\u0020\u0020\u0020\u0060\u0027\u002d\u002d\u0027\u0020\u007c\u0020\u0060\u002d\u002e\u002e\u005f\u0029\u000a\u003b\u0020\u005c\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u002e\u0027\u005f\u002e\u0027\u0020\u002f\u0020\u002f\u0027\u002e\u005f\u005f\u005f\u002e\u003b\u0020\u005c\u000a\u0020\u005c\u0020\u0027\u002d\u002e\u005f\u005f\u002e\u002d\u0027\u005f\u002e\u0027\u0020\u0020\u0020\u003b\u0020\u0027\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005c\u0020\u005c\u000a\u0020\u0020\u0060\u002d\u002e\u002c\u005f\u005f\u002e\u002d\u0027\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u0020\u003b\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003b\u0020\u0027\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u0020\u007c\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u0020\u007c\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u0020\u007c\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002f\u0020\u002f\u006d\u0078\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002e\u002d\u0027\u0020\u0027\u002e\u0020\u0020\u0020\u0020\u0020\u0020\u002c\u0027\u0020\u0060\u002d\u002e\u005f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002f\u0060\u0020\u0020\u0020\u0020\u005f\u0020\u0060\u002e\u0020\u0020\u0020\u002f\u0020\u0020\u005f\u0020\u0020\u0020\u0020\u0060\u002e\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0027\u002d\u002f\u0020\u002f\u0020\u002f\u0020\u0060\u005c\u005f\u0029\u0020\u0028\u005f\u002f\u0060\u0020\u005c\u0020\u0020\u002e\u0060\u002c\u0029\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u0020\u007c\u007c\u0020\u007c\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007c\u0020\u007c\u0020\u007c\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u002d\u0027\u005c\u005f\u0027\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0028\u005f\u002f\u002d\u0027"
};
