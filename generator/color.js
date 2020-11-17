const coxy = require ('../lang');
const {hsluvToHex} = require ('hsluv');
const {setDefaultLang} = require ('../utility');
// Generate Color Names for Chromatic Colors
module.exports.colorGenerator = function (lang) {
  setDefaultLang (lang, 'en');
  if (!Object.keys (coxy).includes (lang)) return {};
  let colors = {};
  Object.keys (coxy[lang].hues).forEach (hue => {
    Object.keys (coxy[lang].chroma).forEach (chroma => {
      Object.keys (coxy[lang].lightness).forEach (lightness => {
        let key = `${coxy[lang].lightness[lightness]} ${coxy[lang].chroma[chroma]} ${coxy[lang].hues[hue]}`
          .replace (/\s+/g, ' ')
          .trim ();
        colors[key] = hsluvToHex ([
          parseFloat (hue),
          parseFloat (chroma),
          parseFloat (lightness),
        ]);
      });
    });
  });
  // Add an entry for black
  colors[coxy[lang]['black']] = hsluvToHex ([0, 0, 0]);
  // Generate Color Names for Shades of Grey
  Object.keys (coxy[lang].lightness).forEach (lightness => {
    let key = `${coxy[lang].lightness[lightness]} ${coxy[lang]['grey']}`
      .replace (/\s+/g, ' ')
      .trim ();
    colors[key] = hsluvToHex ([0, 0, parseFloat (lightness)]);
  });
  // Add an entry for white
  colors[coxy[lang]['white']] = hsluvToHex ([0, 0, 100]);
  return colors;
};
