<p>
   <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/arvindcheenu/chromanomer?style=flat-square">
   <a href="https://www.npmjs.com/package/chromanomer"><img alt="npm" src="https://img.shields.io/npm/v/chromanomer?color=cc3534&style=flat-square">
   <a href="https://www.npmjs.com/package/chromanomer"><img alt="npm" src="https://img.shields.io/npm/dt/chromanomer?label=overall%20downloads&style=flat-square"></a>
   <a href="https://www.npmjs.com/package/chromanomer"><img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/min/chromanomer?label=npm%20bundle%20size&style=flat-square"></a>
   <a href="https://www.npmjs.com/package/chromanomer"><img alt="npm dependencies" src="https://img.shields.io/static/v1?label=dependencies&message=0&color=brightgreen&style=flat-square"></a>
   <a href="https://www.npmjs.com/package/chromanomer"><img alt="NPM" src="https://img.shields.io/npm/l/chromanomer?style=flat-square"></a>
<br/>
</p>

![screenshot](https://raw.githubusercontent.com/arvindcheenu/Chromanomer/master/screenshots/no-command.png)

[![Installation and Usage](https://img.shields.io/badge/-Installation%20+%20usage-0144b7?style=for-the-badge&logo=PowerShell)](https://github.com/arvindcheenu/Chromanomer/blob/master/docs/INSTALL.md)
[![Sass Styling Api](https://img.shields.io/badge/-Sass%20Styles-73264d?style=for-the-badge&logo=sass)](https://github.com/arvindcheenu/Chromanomer/blob/master/docs/STYLE.md)
[![Node Api](https://img.shields.io/badge/-Node%20Api-435d0e?style=for-the-badge&logo=node.js)](https://github.com/arvindcheenu/Chromanomer/blob/master/docs/API.md)
[![CommandLine Api](https://img.shields.io/badge/-CommandLine%20Api-1a1a1a?style=for-the-badge&logo=GNU%20Bash)](https://github.com/arvindcheenu/Chromanomer/blob/master/docs/CLI.md)
 
### 🔑 Key Features

* 👁️ **Perceptually uniform** colours
* 👌 **Semantically sound** names
* 🌐 **ii8n** friendly 
* ♿ **Visually Accessible** by design

### 🤔 Choice of Color Space

This library builds over the **HSLUV** Color Space that maps the boundaries of RGB Color Space to the perceptually uniform **CIELCHuv** Color Space, thus circumventing its problem of unbounded chroma. Though this leads to non-uniform chroma, the trade-off is less significant in comparison with other colorspaces: 
* **HSL**❓  While this transformation of RGB color space is more intuitive in its representation, the *lightness* in *HSL* does *not* represent *perceptual lightness* but rather *relative brightness*.
* **Munsell**❓ While colors were loosely based on perception, they were mostly inconsistent and dependent on the environment. Moreover, quantitative differences could only be defined over a single color attribute.
* **NCS**❓ Based on the psychophysics of color perception, *NCS* is better than *Munsell* as environmental lighting conditions do not impact color choices. However, this system must not be used to model perceived color differences, which is necessary requirement for a naming system to be accessible.
* **LAB**❓ Though the *CIELAB* color space represents a broader color gamut with better perceptual accuracy than the *Munsell* System, the parameters **a*** and **b*** makes it harder to arrive at a mental model.

### 🎨 Designing the Nomenclature of Color

The following schema was arrived at by extracting the best traits from existing naming solutions (such as the Five Color Primaries in *Munsell Naming System*) and selecting linguistically universal color terms. The incorporation of Adjective terms also enhances the learnability and composability by reducing the potential number of color terms to remember.

![Color Schema Visual Representation](https://raw.githubusercontent.com/arvindcheenu/Chromanomer/master/paper/schematic.jpeg)

For a more detailed look at an object applying this schema, please see the file [`./lang/cono.en.json`](./lang/cono.en.json).

Besides the above considerations while designing the schema, the following were also looked for:
* The arrangement of terms according to increasing order of intensity in chroma and lightness while diverging from the base value of the schema (see *The Handle* in the above schema).
* The arrangement of Warm and Cool Ranges according to the gradatation of hues from adjacent hue sectors.

---

<p align="center">
<a href="https://github.com/arvindcheenu">Made with ❤️ by <b>Arvind Srinivasan</b>.</a><br/>
<b><small>Licensed Under <a href="https://github.com/arvindcheenu/Chromanomer/blob/master/LICENSE">Apache-2.0</a></small></b>.
 </p>

