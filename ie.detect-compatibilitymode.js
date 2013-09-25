function detectIE() {
  var agentStr = navigator.userAgent;
  IsIE = agentStr.indexOf("MSIE") > -1;
  IsOn = IsIE ? false : undefined;  //defined only if IE
  Version = undefined;

  if (agentStr.indexOf("MSIE 7.0") > -1) {
    IsOn = true;
    if (agentStr.indexOf("Trident/6.0") > -1) {
      Version = 'IE10';
    } else if (agentStr.indexOf("Trident/5.0") > -1) {
      Version = 'IE9';
    } else if (agentStr.indexOf("Trident/4.0") > -1) {
      Version = 'IE8';
    } else {
      IsOn = false; // compatability mimics 7, thus not on
      Version = 'IE7';
    }
  }
  else if (agentStr.indexOf("MSIE 8.0") > -1) {
    Version = 'IE8';
  }
  else if (agentStr.indexOf("MSIE 9.0") > -1) {
    Version = 'IE9';
  }
  else if (agentStr.indexOf("MSIE 10.0") > -1) {
    Version = 'IE10';
  }

  return {
    isIE: IsIE,
    version: Version,
    compatibilityMode: IsOn
  };
}