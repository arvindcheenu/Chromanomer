# 🚸 **Installation & Usage**

- [🚸 **Installation & Usage**](#-----installation---usage--)
    + [💄 Usage as a Style Generator](#---usage-as-a-style-generator)
    + [🕹️ Usage as a Command Line Interface](#----usage-as-a-command-line-interface)
    + [💻 Usage in a Javascript Environment](#---usage-in-a-javascript-environment)

### 💄 Usage as a Style Generator
Installing the package using `npm`:
```shell
$ npm i chromataxy
```
Installing the package using `yarn`:
```shell
$ yarn add chromataxy
```
Importing styles into your `scss`:
```scss
/* Your main.scss file, etc. */
@import "~chromataxy/style/coxy"
```
For detailed documentation, go to [`STYLE.md`](./STYLE.md).
### 🕹️ Usage as a Command Line Interface
1. Ensure that `chromataxy` is installed globally
```shell
$ npm i chromataxy -g
```
2. Now you can use it in terminal like:
```shell
$ coxy
```
For detailed documentation, go to [`CLI.md`](./CLI.md).
### 💻 Usage in a Javascript Environment

The Chromataxy package includes multiple distribution files to support different Javascript environments and build processes. 

Here is a table of all the files in the `/dist` folder and what formats they support:

| Filename | Description |
|:--|:--|
| `coxy.js` | CommonJS module for use in Node. |
| `coxy.module.js` | An ES6 module. For modern browsers as well as Webpack and Rollup. |
| `coxy.umd.js` | An UMD module. For simple script tag loading that exposes a global variable or for RequireJS AMD support. |
| `coxy.modern.js` | Duplicate of color-thief.umd.js. Kept around to maintain backwards compatibility. |

These files are also available as a CDN from UNPKG for importing:
```js
<script src="unpkg.com/chromataxy/@1.0.0/dist/coxy.umd.js"></script>
```
For detailed documentation, go to [`API.md`](./CLI.md).