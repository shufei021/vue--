!function(i,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(i=i||self).browser=o()}(this,function(){"use strict";var i=window.navigator.userAgent,o="MicroMessenger"==i.match(/MicroMessenger/i);return{isChrome:function(){return i.match(/Chrome/i)},isMobile:function(){return!!(i.match(/(iPhone|iPad|iPod)/i)||i.match(/Android/i)||i.match(/Windows Phone/i)||i.match(/IEMobile/i))},isIos:function(){return!!i.match(/(iPhone|iPad|iPod)/i)},isAndroid:function(){return!!i.match(/Android/i)},isWx:function(){return o&&"wxwork"!=i.match(/wxwork/i)},isWxMobile:function(){return o&&"wxwork"!=i.match(/wxwork/i)&&"Mobile"==i.match(/Mobile/i)},isWxPc:function(){return o&&"wxwork"!=i.match(/wxwork/i)&&"Mobile"!=i.match(/Mobile/i)},isWxWork:function(){return o&&"wxwork"==i.match(/wxwork/i)},isWxWorkMobile:function(){return o&&"wxwork"==i.match(/wxwork/i)&&"Mobile"==i.match(/Mobile/i)},isWxWorkPc:function(){return o&&"wxwork"==i.match(/wxwork/i)&&"Mobile"!=i.match(/Mobile/i)},isFirefox:function(){return i.includes("Firefox")},isSafari:function(){return/Safari/.test(i)&&!/Chrome/.test(i)}}});
//# sourceMappingURL=index.js.map
