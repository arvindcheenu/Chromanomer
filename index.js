const {colorGenerator} = require ('../generator/color');
// Self-Built Palette Generation Package
const Matercolor = require ('matercolors');
const Blinder = require ('color-blind');
const {cymk, rgb, hwb, hsl} = require ('../utility');
module.exports.Cono = function (lang = 'en') {
  this.lang = lang;
  this.colors = colorGenerator (this.lang);
  this.chosenColors = {};
  this.currentColor;
  this.currentName;
  this._nearestCono = require ('nearest-color').from (
    colorGenerator (this.lang)
  );
  // Define Getters
  Object.defineProperty (this, 'hex', {
    get: function () {
      return this.currentColor;
    },
  });
  Object.defineProperty (this, 'rgb', {
    get: function () {
      return rgb (this.currentColor);
    },
  });
  Object.defineProperty (this, 'hwb', {
    get: function () {
      return hwb (this.currentColor);
    },
  });
  Object.defineProperty (this, 'hsl', {
    get: function () {
      return hsl (this.currentColor);
    },
  });
  Object.defineProperty (this, 'cymk', {
    get: function () {
      return cymk (this.currentColor);
    },
  });
  // Define Color Setter
  this.withColor = function (string) {
    if (this.colors.hasOwnProperty (string)) {
      this.currentColor = this.colors[string];
      this.currentName = string;
      return this;
    } else {
      throw new SyntaxError (
        'Input Colour String does not follow Naming Convention.'
      );
    }
  };
  // Get Palette of Current Color
  this.makePalette = function () {
    return new Matercolor (this.currentColor);
  };
  // Based on availability, apply Color Blindness Transformations to Chosen Colors.
  this.withColorBlindness = function (blindnessType) {
    return this.findNearest (Blinder[blindnessType] (this.currentColor));
  };
  this.withSubstring = function (substring) {
    let selected = Object.keys (this.colors).filter (function (key) {
      return key.includes (substring);
    });
    for (let i = 0, len = selected.length; i < len; i++) {
      this.chosenColors[selected[i]] = this.colors[selected[i]];
    }
    return this;
  };
  this.makePalettes = function () {
    return Object.keys (this.chosenColors)
      .map (key => {
        let obj = {};
        obj[key] = new Matercolor (this.chosenColors[key]);
        return obj;
      })
      .reduce ((r, c) => Object.assign (r, c), {});
  };
  this.withColorBlindnesses = function (blindnessType) {
    for (const [key, value] of Object.entries (this.chosenColors)) {
      this.chosenColors[key] = Blinder[blindnessType] (value);
    }
    return this;
  };
  this.findNearest = function (hex) {
    let cono = this._nearestCono (hex);
    this.currentColor = cono.value;
    this.currentName = cono.name;
    return this;
  };
};
