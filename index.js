function customLog(msg) {
  var val = '[' + new Date().toGMTString() + '] ' + msg;
  console.log(val);
}

module.exports = customLog;
