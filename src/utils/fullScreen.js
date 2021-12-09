// 浏览器是否支持全屏模式
export const isFullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || false;

// 进入全屏
export const requestFull = (element) => {
  // 判断各种浏览器，找到正确的方法
  const requestMethod = element.requestFullscreen || // W3C
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullscreen;

  if (requestMethod) {
    requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") { // for Internet Explorer
    var wscript = new window.ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    };
  };
};

//退出全屏
export const exitFull = () => {
  // 判断各种浏览器，找到正确的方法
  const exitMethod = document.exitFullscreen || // W3C
    document.webkitCancelFullScreen ||
    document.mozCancelFullScreen ||
    document.msExitFullscreen;

  if (exitMethod) {
    exitMethod.call(document);
  } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
    var wscript = new window.ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    };
  };
};