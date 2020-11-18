import {Cono} from '../dist/cono';
import Matercolor from 'matercolors';
import {setDefaultLang, cymk, rgb, hwb} from '../utility';
import test from 'ava';
test ('default language for colors is English', t => {
  const color = setDefaultLang (undefined, 'en');
  t.is (color, 'en');
});
test ('constructor with valid language loads as expected', t => {
  const color = new Cono ();
  t.is (Object.keys (color).length, 11);
});
test ('constructor with invalid language fails as expected', t => {
  const color = new Cono ('fr').colors;
  t.deepEqual ({}, color);
});
test ('withColor() works for non-english languages', t => {
  const color = new Cono ('ta').withColor ('ஒளிமிக்க சிவந்த ஊதா');
  t.is (color.currentColor, '#c735be');
  t.is (color.currentName, 'ஒளிமிக்க சிவந்த ஊதா');
});
test ('withColor() sets currentColor and currentName as expected', t => {
  const color = new Cono ('en').withColor ('vivid reddish purple');
  t.is (color.currentColor, '#c735be');
  t.is (color.currentName, 'vivid reddish purple');
});
test ('withColor() fails on Invalid Naming Convention', t => {
  const err = t.throws (() => new Cono ('en').withColor ('vivid reddish red'), {
    instanceOf: SyntaxError,
  });
  t.is (err.message, 'Input Colour String does not follow Naming Convention.');
});
test ('makePalette() returns a Matercolor Instance', t => {
  const color = new Cono ('en')
    .withColor ('vivid reddish purple')
    .makePalette ();
  t.true (color instanceof Matercolor);
});
test ('withColorBlindness() works for Valid Blindness Type', t => {
  const color = new Cono ('en')
    .withColor ('vivid reddish purple')
    .withColorBlindness ('protanopia').currentColor;
  t.is (color, '#2775e0');
});
test ('withColorBlindness() fails on Invalid Blindness Type', t => {
  const err = t.throws (
    () =>
      new Cono ('en')
        .withColor ('vivid reddish purple')
        .withColorBlindness ('protonopia'),
    {
      instanceOf: TypeError,
    }
  );
  t.true (err.message.includes ('is not a function'));
});
test ('findNearest() sets currentColor and currentName as expected', t => {
  const color = new Cono ('en').findNearest ('#2775e0');
  t.is (color.currentName, 'vivider coolest bluish purple');
  t.is (color.currentColor, '#2775e0');
});
test ('findNearest() works with withColorBlindness() as expected', t => {
  const color = new Cono ('en')
    .findNearest ('#2775e0')
    .withColorBlindness ('achromatopsia');
  t.is (color.currentName, 'dim greyish cooler reddish purple');
  t.is (color.currentColor, '#6c656c');
});
test ('withSubstring() works as expected', t => {
  const color = new Cono ('en').withSubstring ('warm reddish purple')
    .chosenColors;
  t.is (Object.keys (color).length, 210);
});
test ('makePalettes() works as expected', t => {
  const color = new Cono ('en')
    .withSubstring ('warm reddish purple')
    .makePalettes ();
  t.is (Object.keys (color).length, 210);
  t.is (Object.keys (color['warm reddish purple']).length, 4);
});
test ('withColorBlindnesses() works as expected', t => {
  const color = new Cono ('en')
    .withSubstring ('warm reddish purple')
    .withColorBlindnesses ('protanopia').chosenColors;
  t.is (Object.keys (color).length, 210);
});
test ('Conversion of colors to Hex works as expected', t => {
  const color = new Cono ('en').withColor ('warm reddish purple');
  t.is (color.hex, '#af56a3');
});
test ('Conversion of colors to sRgb works as expected', t => {
  const color = new Cono ('en').withColor ('warm reddish purple');
  t.is (color.rgb.r, 175);
  t.is (color.rgb.g, 86);
  t.is (color.rgb.b, 163);
  const color2 = rgb ('#fffgg');
  t.is (color2, null);
});
test ('Conversion of colors to Normalised Hsl works as expected', t => {
  const color = new Cono ('en').withColor ('warm reddish purple');
  t.is (color.hsl.h, 0.855805243445693);
  t.is (color.hsl.s, 0.357429718875502);
  t.is (color.hsl.l, 0.5117647058823529);
  const color2 = new Cono ('en').withColor (
    'paler deeper warmer greenish blue'
  );
  t.is (color2.hsl.h, 0.49367088607594933);
  t.is (color2.hsl.s, 0.3147410358565737);
  t.is (color2.hsl.l, 0.49215686274509807);
  const color3 = new Cono ('en').withColor (
    'paler deeper coolest greenish blue'
  );
  t.is (color3.hsl.h, 0.521072796934866);
  t.is (color3.hsl.s, 0.3493975903614458);
  t.is (color3.hsl.l, 0.5117647058823529);
  const color4 = new Cono ('en').withColor ('grey');
  t.is (color4.hsl.h, 0);
  t.is (color4.hsl.s, 0);
  t.is (color4.hsl.l, 0.4666666666666667);
});
test ('Conversion of colors to Normalised Hwb works as expected', t => {
  const color = hwb ('#af56a3');
  t.is (color.h, 0.855805243445693);
  t.is (color.w, 0.33725490196078434);
  t.is (color.b, 0.3137254901960784);
  const color1 = new Cono ('en').withColor ('warm reddish purple');
  t.is (color1.hwb.h, 0.855805243445693);
  t.is (color1.hwb.w, 0.33725490196078434);
  t.is (color1.hwb.b, 0.3137254901960784);
  const color2 = hwb ('#ffffff');
  t.is (color2.h, 0);
  t.is (color2.w, 1);
  t.is (color2.b, 0);
  const color3 = hwb ('#c8ffc8');
  t.is (color3.h, 0.3333333333333333);
  t.is (color3.w, 0.7843137254901961);
  t.is (color3.b, 0);
  const color4 = hwb ('#c8c8ff');
  t.is (color4.h, 0.6666666666666666);
  t.is (color4.w, 0.7843137254901961);
  t.is (color4.b, 0);
  const color5 = hwb ('#c8c2ff');
  t.is (color5.h, 0.6830601092896175);
  t.is (color5.w, 0.7607843137254902);
  t.is (color5.b, 0);
});
test ('Conversion of colors to Normalised Cymk works on Valid Hex', t => {
  const color = new Cono ('en').withColor ('warm reddish purple');
  t.is (color.cymk.c, 0);
  t.is (color.cymk.y, 0.5085714285714286);
  t.is (color.cymk.m, 0.06857142857142864);
  t.is (color.cymk.k, 0.3137254901960784);
  const color2 = cymk ('#000000');
  t.is (color2.c, 0);
  t.is (color2.y, 0);
  t.is (color2.m, 0);
  t.is (color2.k, 1);
  const color3 = cymk ('000000');
  t.is (color3.c, 0);
  t.is (color3.y, 0);
  t.is (color3.m, 0);
  t.is (color3.k, 1);
});
test ('Conversion of colors to Normalised Cymk fails on Invalid Hex', t => {
  const err = t.throws (() => cymk ('#ffff'), {
    instanceOf: SyntaxError,
  });
  t.is (err.message, 'Invalid length of the input hex value!');
  const err2 = t.throws (() => cymk ('#ffffgg'), {
    instanceOf: SyntaxError,
  });
  t.is (err2.message, 'Invalid digits in the input hex value!');
});
