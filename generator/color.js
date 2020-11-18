const cono = require ('../lang');
const {hsluvToHex} = require ('hsluv');
const {setDefaultLang} = require ('../utility');
// Generate Color Names for Chromatic Colors
module.exports.colorGenerator = function (lang) {
  setDefaultLang (lang, 'en');
  if (!Object.keys (cono).includes (lang)) return {};
  let colors = {};
  Object.keys (cono[lang].hues).forEach (hue => {
    Object.keys (cono[lang].chroma).forEach (chroma => {
      Object.keys (cono[lang].lightness).forEach (lightness => {
        let key = `${cono[lang].lightness[lightness]} ${cono[lang].chroma[chroma]} ${cono[lang].hues[hue]}`
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
  colors[cono[lang]['black']] = hsluvToHex ([0, 0, 0]);
  // Generate Color Names for Shades of Grey
  Object.keys (cono[lang].lightness).forEach (lightness => {
    let key = `${cono[lang].lightness[lightness]} ${cono[lang]['grey']}`
      .replace (/\s+/g, ' ')
      .trim ();
    colors[key] = hsluvToHex ([0, 0, parseFloat (lightness)]);
  });
  // Add an entry for white
  colors[cono[lang]['white']] = hsluvToHex ([0, 0, 100]);
  return colors;
};
