!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){var t=require("../generator/color").colorGenerator,r=require("matercolors"),e=require("color-blind"),n=require("../utility"),o=n.cymk,i=n.rgb,s=n.hwb,h=n.hsl;module.exports.Coxy=function(n){void 0===n&&(n="en"),this.lang=n,this.colors=t(this.lang),this.chosenColors={},this._nearestCoxy=require("nearest-color").from(t(this.lang)),Object.defineProperty(this,"hex",{get:function(){return this.currentColor}}),Object.defineProperty(this,"rgb",{get:function(){return i(this.currentColor)}}),Object.defineProperty(this,"hwb",{get:function(){return s(this.currentColor)}}),Object.defineProperty(this,"hsl",{get:function(){return h(this.currentColor)}}),Object.defineProperty(this,"cymk",{get:function(){return o(this.currentColor)}}),this.withColor=function(t){if(this.colors.hasOwnProperty(t))return this.currentColor=this.colors[t],this.currentName=t,this;throw new SyntaxError("Input Colour String does not follow Naming Convention.")},this.makePalette=function(){return new r(this.currentColor)},this.withColorBlindness=function(t){return this.findNearest(e[t](this.currentColor))},this.withSubstring=function(t){for(var r=Object.keys(this.colors).filter(function(r){return r.includes(t)}),e=0,n=r.length;e<n;e++)this.chosenColors[r[e]]=this.colors[r[e]];return this},this.makePalettes=function(){var t=this;return Object.keys(this.chosenColors).map(function(e){var n={};return n[e]=new r(t.chosenColors[e]),n}).reduce(function(t,r){return Object.assign(t,r)},{})},this.withColorBlindnesses=function(t){for(var r=0,n=Object.entries(this.chosenColors);r<n.length;r++){var o=n[r];this.chosenColors[o[0]]=e[t](o[1])}return this},this.findNearest=function(t){var r=this._nearestCoxy(t);return this.currentColor=r.value,this.currentName=r.name,this}}});
//# sourceMappingURL=coxy.umd.js.map
