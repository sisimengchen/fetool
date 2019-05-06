"use strict";

module.exports = function (name) {
  var ascii = asciiMap[name + ""];
  ascii && console.log(ascii);
};

var asciiMap = {
  fecool: "\n                                                  \n   /##                                    ###     \n #/ ###                                    ###    \n##   ###                                    ##    \n##                                          ##    \n##                                          ##    \n###### /##       /###      /###     /###    ##    \n##### / ###     / ###  /  / ###  / / ###  / ##    \n##   /   ###   /   ###/  /   ###/ /   ###/  ##    \n##  ##    ### ##        ##    ## ##    ##   ##    \n##  ########  ##        ##    ## ##    ##   ##    \n##  #######   ##        ##    ## ##    ##   ##    \n##  ##        ##        ##    ## ##    ##   ##    \n##  ####    / ###     / ##    ## ##    ##   ##    \n##   ######/   ######/   ######   ######    ### / \n ##   #####     #####     ####     ####      ##/  \n\n                                                  ",
  mokey: "                         ___\n                     .-'`     `'.\n              __    /  .-. .-.   \\\n           .'`__`'.| /  ()|  ()\\  \\\n          / /`   `\\\\ |_ .-.-. _|  ;  __\n          ||     .-'`  (/`|`\\) `-./'`__`'.\n          \\ \\. .'                 `.`  `\\ \\\n           `-./  _______            \\    ||\n              | |\\      ''''---.__   |_./ /\n              ' \\ `'---..________/|  /.-'`\n               `.`._            _/  /\n                 `-._'-._____.-' _.`\n                  _,-''.__...--'`\n              _.-'_.    ,-. _ `'-._\n           .-' ,-' /   /   \\\\`'-._ `'.\n         <`  ,'   /   /     \\\\    / /\n          `.  \\  ;   ;       ;'  / /_\n    __   (`\\`. \\ |   |       ||.' // )\n .'`_ `\\(`'.`.\\_\\|   |    o  |/_,'/.' )\n/ .' `; |`-._ ` /;    \\     / \\   _.-'\n| |  (_/  (_..-' _\\    `'--' | `-.._)\n; \\        _.'_.' / /'.___.; \\\n \\ '-.__.-'_.'   ; '        \\ \\\n  `-.,__.-'      | ;         ; '\n                 | |         | |\n                 | |         / /mx\n               .-' '.      ,' `-._\n             /`    _ `.   /  _    `.\n            '-/ / / `\\_) (_/` \\  .`,)\n             | || |            | | |\n             `-'\\_'            (_/-'"
};