const fs = require ('fs');
const {colorGenerator} = require ('../generator/color');
// Make Maps to be used for generating SASS Classes
module.exports.makeVariables = function (lang = 'en') {
  const colorJSON = colorGenerator (lang);
  fs.unlinkSync ('./style/_colors.scss');
  const scssBuilder = fs.createWriteStream ('./style/_colors.scss', {
    flags: 'a',
  });
  scssBuilder.write (
    '$colors : ' +
      JSON.stringify (colorJSON, null, 2)
        .replace (/{/gm, '(')
        .replace (/",/gm, ',')
        .replace (/',/gm, ',')
        .replace (/'#/gm, '#')
        .replace (/"#/gm, '#')
        .replace (/f"/gm, 'f')
        .replace (/}/gm, ')') +
      ';'
  );
  scssBuilder.close ();
};
