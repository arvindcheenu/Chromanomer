# 🚸 **Installation & Usage**

- [🚸 **Installation & Usage**](#-installation--usage)
    - [💄 Usage as a Style Generator](#-usage-as-a-style-generator)
    - [🕹️ Usage as a Command Line Interface](#%EF%B8%8F-usage-as-a-command-line-interface)
    - [💻 Usage in a Javascript Environment](#-usage-in-a-javascript-environment)

### 💄 Usage as a Style Generator
Installing the package using `npm`:
```shell
$ npm i chromanomer@latest
```
Installing the package using `yarn`:
```shell
$ yarn add chromanomer@latestv
```
Importing styles into your `scss`:
```scss
/* Your main.scss file, etc. */
@import "~chromanomer/style/cono"
```
For detailed documentation, go to [`STYLE.md`](./STYLE.md).
### 🕹️ Usage as a Command Line Interface
1. Ensure that `chromanomer` is installed globally
```shell
$ npm i chromanomer@latest -g
```
2. Now you can use it in terminal like:
```shell
$ cono
```
To uninstall CLI, simply do:
```shell
$ npm uninstall chromanomer -g
```
For detailed documentation, go to [`CLI.md`](./CLI.md).
### 💻 Usage in a Javascript Environment

The Chromanomer package includes multiple distribution files to support different Javascript environments and build processes. 

Here is a table of all the files in the `/dist` folder and what formats they support:

| Filename | Description |
|:--|:--|
| `cono.js` | CommonJS module for use in Node. |
| `cono.module.js` | An ES6 module. For modern browsers as well as Webpack and Rollup. |
| `cono.umd.js` | An UMD module. For simple script tag loading that exposes a global variable or for RequireJS AMD support. |
| `cono.modern.js` | Duplicate of color-thief.umd.js. Kept around to maintain backwards compatibility. |

These files are also available as a CDN from UNPKG for importing:
```js
<script src="unpkg.com/chromanomer/@1.0.4/dist/cono.umd.js"></script>
```
For detailed documentation, go to [`API.md`](./CLI.md).