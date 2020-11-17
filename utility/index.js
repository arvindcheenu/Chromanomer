module.exports.setDefaultLang = function (lang, defaultLang) {
  return lang ? lang : defaultLang;
};
module.exports.cymk = function (hex) {
  let computedC = 0;
  let computedM = 0;
  let computedY = 0;
  let computedK = 0;
  hex = hex.charAt (0) == '#' ? hex.substring (1, 7) : hex;
  if (hex.length != 6) {
    throw new SyntaxError ('Invalid length of the input hex value!');
  }
  if (/[0-9a-f]{6}/i.test (hex) != true) {
    throw new SyntaxError ('Invalid digits in the input hex value!');
  }
  let r = parseInt (hex.substring (0, 2), 16);
  let g = parseInt (hex.substring (2, 4), 16);
  let b = parseInt (hex.substring (4, 6), 16);
  if (r == 0 && g == 0 && b == 0) {
    computedK = 1;
    return {c: 0, y: 0, m: 0, k: 1};
  }
  computedC = 1 - r / 255;
  computedM = 1 - g / 255;
  computedY = 1 - b / 255;
  let minCMY = Math.min (computedC, Math.min (computedM, computedY));
  computedC = (computedC - minCMY) / (1 - minCMY);
  computedM = (computedM - minCMY) / (1 - minCMY);
  computedY = (computedY - minCMY) / (1 - minCMY);
  computedK = minCMY;
  return {c: computedC, y: computedM, m: computedY, k: computedK};
};
module.exports.rgb = function (hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec (hex);
  return result
    ? {
        r: parseInt (result[1], 16),
        g: parseInt (result[2], 16),
        b: parseInt (result[3], 16),
      }
    : null;
};
module.exports.hwb = function (hex) {
  let h, w, b;
  let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec (hex);
  let r = parseInt (rgb[1], 16) / 255;
  let g = parseInt (rgb[2], 16) / 255;
  let B = parseInt (rgb[3], 16) / 255;
  let max = Math.max (r, g, B);
  let min = Math.min (r, g, B);
  let chroma = max - min;
  if (chroma == 0) {
    h = 0;
  } else if (r == max) {
    h = (g - B) / chroma + (g < B ? 6 : 0);
  } else if (g == max) {
    h = (B - r) / chroma + 2;
  } else {
    h = (r - g) / chroma + 4;
  }
  h /= 6;
  w = min;
  b = 1 - max;
  return {h: h, w: w, b: b};
};
module.exports.hsl = function (hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec (hex);
  let r = parseInt (result[1], 16);
  let g = parseInt (result[2], 16);
  let b = parseInt (result[3], 16);
  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max (r, g, b);
  let min = Math.min (r, g, b);
  let h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  let HSL = {
    h: h,
    s: s,
    l: l,
  };
  return HSL;
};
