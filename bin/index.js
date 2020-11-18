#! /usr/bin/env node
const {colorGenerator, makeVariables} = require ('../generator');
const {Cono} = require ('../dist/cono');
const chalk = require ('chalk');
require ('./intro') ();
console.log ();
let {argv} = require ('yargs')
  .scriptName ('cono')
  .command (
    'palette <name> [--blindness] [--json] [--greedy]',
    'Generate Harmonic Color Palettes from Cono Color(s).',
    yargs => {
      yargs.positional ('n', {
        alias: 'name',
        describe: "Color Name following Cono's naming conventions.",
        demandOption: 'Color Name is required.',
        type: 'string',
        nargs: 1,
      }), yargs.positional ('b', {
        alias: ['blind', 'blindness'],
        describe: 'Name of the Blindness Type you want to emulate.',
        choices: [
          'protanomaly',
          'protanopia',
          'deuteranomaly',
          'deuteranopia',
          'tritanomaly',
          'tritanopia',
          'achromatomaly',
          'achromatopsia',
        ],
        type: 'string',
        nargs: 1,
      }), yargs.positional ('j', {
        alias: 'json',
        describe: 'When set, returns json instead of visual representation.',
        default: false,
        type: 'boolean',
        nargs: 0,
      }), yargs.positional ('g', {
        alias: 'greedy',
        describe: 'When set, matches all colors containing the string.',
        default: false,
        type: 'boolean',
        nargs: 0,
      });
    },
    argv => {
      const {name, json, greedy, blindness} = argv;
      let colorObject;
      if (greedy) {
        if (blindness === undefined) {
          colorObject = new Cono ().withSubstring (name).chosenColors;
        } else {
          colorObject = new Cono ()
            .withSubstring (name)
            .withColorBlindnesses (blindness).chosenColors;
        }
        if (json) {
          console.log (JSON.stringify (colorObject, null, 2));
        } else {
          console.log (chalk.bold.dim ('ℹ️  Note')), console.log (
            chalk.dim ('The following color palette is perpetually uniform.'),
            '\n\n',
            chalk.bold.underline ('Primary Palette'),
            '\n'
          );
          Object.entries (colorObject).forEach (entry => {
            console.log (
              chalk.hex (entry[1]).bold ('████▍') +
                ' ' +
                entry[0] +
                '\n' +
                chalk.hex (entry[1]).bold ('████▍ ') +
                chalk.bold (entry[1]),
              '\n'
            );
          });
        }
      } else {
        if (blindness === undefined) {
          colorObject = new Cono ().withColor (name).makePalette ().palette ();
        } else {
          colorObject = new Cono ()
            .withColor (name)
            .withColorBlindness (blindness)
            .makePalette ()
            .palette ();
        }
        if (json) {
          console.log (JSON.stringify (colorObject, null, 2));
        } else {
          console.log (chalk.bold.dim ('ℹ️  Note')), console.log (
            chalk.dim (
              'The following harmonic palettes are generated based on the Golden Ratio.'
            ),
            '\n\n',
            chalk.bold.underline ('Primary Palette'),
            '\n'
          );
          Object.keys (colorObject.primary).forEach (key => {
            let value = colorObject.primary[key].hex;
            console.log (
              chalk.hex (value).bold ('████▍') +
                ' ' +
                new Cono ().findNearest (value).currentName +
                ` (${key})` +
                '\n' +
                chalk.hex (value).bold ('████▍ ') +
                chalk.bold (value),
              '\n'
            );
          });
          console.log (chalk.bold.underline ('Secondary Palette'), '\n');
          Object.keys (colorObject.secondary).forEach (key => {
            let value = colorObject.secondary[key].hex;
            console.log (
              chalk.hex (value).bold ('████▍') +
                ' ' +
                new Cono ().findNearest (value).currentName +
                ` (${key})` +
                '\n' +
                chalk.hex (value).bold ('████▍ ') +
                chalk.bold (value),
              '\n'
            );
          });
        }
      }
    }
  )
  .command (
    'nearest <hex> [--colorspace] [--blindness]',
    'Get the Closest Cono Color Name for the given Hex Color.',
    yargs => {
      yargs.positional ('x', {
        alias: 'hex',
        describe: '6-Digit Hash Prefixed Hex Color to Find Nearest for.',
        demandOption: '6-Digit Hash Prefixed Hex Color is required.',
        type: 'string',
        nargs: 1,
      }), yargs.positional ('c', {
        alias: ['space', 'colorspace'],
        describe: 'Name of the CSS Colorspace to convert to.',
        default: 'all',
        choices: ['all', 'hex', 'rgb', 'hsl', 'hwb', 'cymk'],
        type: 'string',
        nargs: 1,
      }), yargs.positional ('b', {
        alias: ['blind', 'blindness'],
        describe: 'Name of the Blindness Type you want to emulate.',
        choices: [
          'protanomaly',
          'protanopia',
          'deuteranomaly',
          'deuteranopia',
          'tritanomaly',
          'tritanopia',
          'achromatomaly',
          'achromatopsia',
        ],
        type: 'string',
        nargs: 1,
      });
    },
    argv => {
      const {x, colorspace, blindness} = argv;
      let namedColor, hex, name;
      if (blindness === undefined) {
        namedColor = new Cono ().findNearest (x);
      } else {
        namedColor = new Cono ().findNearest (x).withColorBlindness (blindness);
      }
      name = namedColor.currentName;
      hex = namedColor.currentColor.substring (1).toUpperCase ();
      let cname =
        chalk.hex (hex).bold ('████▍') +
        ' ' +
        name +
        '\n' +
        chalk.hex (hex).bold ('████▍');
      let rgb = `${namedColor.rgb.r}, ${namedColor.rgb.g}, ${namedColor.rgb.b}`;
      let hwb = `${Math.round (namedColor.hwb.h * 360)}, ${Math.round (namedColor.hwb.w * 100)}%, ${Math.round (namedColor.hwb.b * 100)}%`;
      let hsl = `${Math.round (namedColor.hsl.h * 360)}, ${Math.round (namedColor.hsl.s * 100)}%, ${Math.round (namedColor.hsl.l * 100)}%`;
      let cymk = `${Math.round (namedColor.cymk.c * 100)}%, ${Math.round (namedColor.cymk.y * 100)}%, ${Math.round (namedColor.cymk.m * 100)}%, ${Math.round (namedColor.cymk.k * 100)}%`;
      switch (colorspace) {
        case 'hex':
          console.log (cname + ' #' + chalk.bold (hex), '\n');
          break;
        case 'rgb':
          console.log (cname + ' rgb(' + chalk.bold (rgb) + ')\n');
          break;
        case 'hwb':
          console.log (cname + ' hwb(' + chalk.bold (hwb) + ')\n');
          break;
        case 'hsl':
          console.log (cname + ' hsl(' + chalk.bold (hsl) + ')\n');
          break;
        case 'cymk':
          console.log (cname + ' cymk(' + chalk.bold (cymk) + ')\n');
          break;
        case 'all':
          console.log (
            chalk.hex (hex).bold (' ▩▩▩▩▩▩') + '\t' + name + '\n',
            `${chalk.dim ('hex')}\t#` + chalk.bold (hex) + '\n',
            `${chalk.dim ('rgb')}\trgb(` + chalk.bold (rgb) + ')\n',
            `${chalk.dim ('hwb')}\thwb(` + chalk.bold (hwb) + ')\n',
            `${chalk.dim ('hsl')}\thsl(` + chalk.bold (hsl) + ')\n',
            `${chalk.dim ('cymk')}\tcymk(` + chalk.bold (cymk) + ')\n'
          );
          break;
      }
    }
  )
  .command (
    'color <name> [--colorspace] [--blindness]',
    'Retrieve color information for given a Cono Color Name.',
    yargs => {
      yargs.positional ('n', {
        alias: 'name',
        describe: "Color Name following Cono's naming conventions.",
        demandOption: 'Color Name is required.',
        type: 'string',
        nargs: 1,
      }), yargs.positional ('c', {
        alias: ['space', 'colorspace'],
        describe: 'Name of the CSS Colorspace to convert to.',
        default: 'all',
        choices: ['all', 'hex', 'rgb', 'hsl', 'hwb', 'cymk'],
        type: 'string',
        nargs: 1,
      }), yargs.positional ('b', {
        alias: ['blind', 'blindness'],
        describe: 'Name of the Blindness Type you want to emulate.',
        choices: [
          'protanomaly',
          'protanopia',
          'deuteranomaly',
          'deuteranopia',
          'tritanomaly',
          'tritanopia',
          'achromatomaly',
          'achromatopsia',
        ],
        type: 'string',
        nargs: 1,
      });
    },
    argv => {
      let {name, colorspace, blindness} = argv;
      let namedColor, hex;
      if (blindness === undefined) {
        namedColor = new Cono ().withColor (name);
      } else {
        namedColor = new Cono ()
          .withColor (name)
          .withColorBlindness (blindness);
      }
      name = namedColor.currentName;
      hex = namedColor.currentColor.substring (1).toUpperCase ();

      hex = namedColor.hex.substring (1).toUpperCase ();
      let cname =
        chalk.hex (hex).bold ('████▍') +
        ' ' +
        name +
        '\n' +
        chalk.hex (hex).bold ('████▍');
      let rgb = `${namedColor.rgb.r}, ${namedColor.rgb.g}, ${namedColor.rgb.b}`;
      let hwb = `${Math.round (namedColor.hwb.h * 360)}, ${Math.round (namedColor.hwb.w * 100)}%, ${Math.round (namedColor.hwb.b * 100)}%`;
      let hsl = `${Math.round (namedColor.hsl.h * 360)}, ${Math.round (namedColor.hsl.s * 100)}%, ${Math.round (namedColor.hsl.l * 100)}%`;
      let cymk = `${Math.round (namedColor.cymk.c * 100)}%, ${Math.round (namedColor.cymk.y * 100)}%, ${Math.round (namedColor.cymk.m * 100)}%, ${Math.round (namedColor.cymk.k * 100)}%`;
      switch (colorspace) {
        case 'hex':
          console.log (cname + ' #' + chalk.bold (hex), '\n');
          break;
        case 'rgb':
          console.log (cname + ' rgb(' + chalk.bold (rgb) + ')\n');
          break;
        case 'hwb':
          console.log (cname + ' hwb(' + chalk.bold (hwb) + ')\n');
          break;
        case 'hsl':
          console.log (cname + ' hsl(' + chalk.bold (hsl) + ')\n');
          break;
        case 'cymk':
          console.log (cname + ' cymk(' + chalk.bold (cymk) + ')\n');
          break;
        case 'all':
          console.log (
            chalk.hex (hex).bold (' ▩▩▩▩▩▩') + '\t' + name + '\n',
            `${chalk.dim ('hex')}\t#` + chalk.bold (hex) + '\n',
            `${chalk.dim ('rgb')}\trgb(` + chalk.bold (rgb) + ')\n',
            `${chalk.dim ('hwb')}\thwb(` + chalk.bold (hwb) + ')\n',
            `${chalk.dim ('hsl')}\thsl(` + chalk.bold (hsl) + ')\n',
            `${chalk.dim ('cymk')}\tcymk(` + chalk.bold (cymk) + ')\n'
          );
          break;
      }
    }
  )
  .command (
    'run <generator> [--language]',
    'Run generators builtin with Cono.',
    yargs => {
      yargs.positional ('g', {
        alias: ['gen', 'generator'],
        describe: 'Name the Generator you choose to run.',
        demandOption: 'Generator Name is required.',
        choices: ['color', 'scss'],
        type: 'string',
        nargs: 1,
      }), yargs.positional ('l', {
        alias: ['lang', 'language'],
        describe: 'Enter 2-letter ISO 639-1 Code for the Language you wish to use for naming.',
        default: 'en',
        choices: ['en', 'ta'],
        type: 'string',
        nargs: 1,
      });
    },
    argv => {
      const {generator, language} = argv;
      switch (generator) {
        case 'color':
          colorGenerator (language);
          console.log ('✨ Done Generating Colors.');
          break;
        case 'scss':
          makeVariables (language);
          console.log ('✨ Done Generating SCSS Variables.');
          break;
        default:
          throw 'The Generator you specified does not exist.';
      }
    }
  )
  .fail (function (msg, _, yargs) {
    console.log (yargs.help ());
    console.error ('\n', chalk.red.dim (msg === null ? '' : msg), '\n');
    process.exit (0);
  })
  .demandCommand (1, '')
  .alias ('h', 'help')
  .alias ('v', 'version')
  .epilog (
    chalk.dim (
      `Made with ${chalk.white.red ('❤️')} by ${chalk.white.bold ('Arvind Srinivasan')}.\nLicensed under ${chalk.bold ('Apache-2.0')}.\n`
    )
  );
