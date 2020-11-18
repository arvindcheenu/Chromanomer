# Contributing

### Types of contributions we're looking for

There are many ways you can directly contribute to **Chromataxy** (in *descending* order of need):

* Adding support for other preprocessors such as **Less**, **Stylus** and **PostCSS**.
* Add support for new Languages in which Coxy can be adapted.
* Revise existing languages to remove linguistic and grammatical errors and inaccuracies.
* Checking, Fixing and Improving upon existing documentation and testing.

Interested in making a contribution? *Read on!*

### Ground rules & expectations

Before we get started, here are a few things we expect from you (and that you should expect from others):

* Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.
* Open Source Guides are released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms.
* If you open a pull request, please ensure that your contribution passes all tests. If there are test failures, you will need to address them before we can merge your contribution.
* When adding content, please consider if it is widely valuable. Please don't add references or links to things you or your employer have created as others will do so if they appreciate it.

### How to contribute

If you'd like to contribute, start by searching through the issues and pull requests to see whether someone else has raised a similar idea or question.

If you don't see your idea listed, and you think it fits into the goals of this repository, do one of the following:

* If your contribution is **minor**, such as a minor fixes or additions to documentation, languages or tests, open a pull request.
* If your contribution is **major**, such as adding a new language or working on a new preprocessor, start by opening an issue first. That way, other people can weigh in on the discussion before you do any work.

### How to make changes

Before making a change, make sure to [run tests](#how-to-test-changes) and keep a track of it.

#### For changing `index.js` 

After making your changes make sure to build distribution files using `npm run build` before running your [tests](#how-to-test-changes).

> ⚠️ Most importantly, remember to use **`../`** in place of **`./`** in your require statement as all other files use only the generated distribution files in the `dist` folder.

#### For changing the `lang` folder

For creating a new language, you need to do three things:
* First add a new language file with the template `cono.<lang-alpha2-code>.json`. For a list of valid language codes, refer to [this table](https://www.loc.gov/standards/iso639-2/php/English_list.php) under the `ISO 639-1` column.
* Copy the contents of `cono.en.json` to the newly created file and update it with the corresponding translations.
* Import and add the file to `lang/index.js`.
```diff
const en = require ('./cono.en.json');
const ta = require ('./cono.ta.json');
+ const ln = require ('./cono.<lang-code>.json');
module.exports = {
  en: en,
  ta: ta,
+  ln: lang
};

```

### How to test changes

#### For Testing `scss` files

> ⚠️ This setup might change in the near future to enable seamless usage of all languages so until then, Changes to Demo Files are **NOT TO BE PUSHED UNDER ANY CIRCUMSTANCES** and are currently present only for verification.

* In case you are testing a new language, generate `style/colors.scss` using the cli command `coxy run scss -l <lang-code>`.

* Execute `npm run demo` for your language and change `demo/scss/demo.scss` file to test that it works.

* Verify the output at `demo/css/demo.css`

#### For Testing `js` files

* Add or update existing test file at `coxy.test.js`
* Execute `npm run test` to check for passing and failing tests.
* Execute `npm run coverage` to generate coverage. Ensure that the coverage of all files are 100% under Lines, Statements and Functions.

### Community

Discussions about the Open Source Guides take place on this repository's Issues and Pull Requests sections. Anybody is welcome to join these conversations. Wherever possible, unless its the last resort, do not take these conversations to private channels (such as directly contacting this repository's author or its maintainers).