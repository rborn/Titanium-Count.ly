// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var countly = require('count.ly');

console.log('device',countly.device);
console.log('deviceName',countly.deviceName);
console.log('devicePlatform',countly.platform)
console.log('multitaskingSupported',countly.multitaskingSupported);
console.log('orientation', countly.orientation);
console.log('osVersion', countly.osVersion);
console.log('carrier', countly.carrier);
console.log('resolution', countly.resolution);
console.log('locale',countly.locale);
console.log('appVersion',countly.appVersion);
console.log('osVersion',countly.osVersion);

countly.start('APP_KEY','http://API_HOST.com');

countly.event({
    name:'entered-store'
  , count:1
});

countly.event({
    name:'purchased-credits'
  , count:3, sum:18})

countly.event({
    name:'opened-chats'
  , count:4
  , segmentation:{dave:1, sue:1, tom:2 }
});

countly.event({
    name:'purchase'
  , count:5
  , sum:100
  , segmentation:{dogs:2, cats:1, mice:1, treats:1 }
});