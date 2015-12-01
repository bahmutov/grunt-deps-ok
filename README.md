# grunt-deps-ok

> Quickly checks if top level dependencies are missing or out of date using [deps-ok](https://github.com/bahmutov/deps-ok)

[![NPM info][nodei.co]](https://npmjs.org/package/grunt-deps-ok)

[![Build status][ci-image]][ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![endorse][endorse-image]][endorse-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)

[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

## Getting Started and Install
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-deps-ok --save-dev
```

## Configuration

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-deps-ok');
grunt.registerTask('default', ['deps-ok', rest of the tasks]);
```

That's it! Every time grunt runs, it will **quickly** check if all (normal, dev, peer) top
level dependencies are present in the *node_modules* folder. It will also verify
that the installed module versions are greater or equal to the ones declared inside *package.json* file.

You can configure further by providing options

```js
// Gruntfile.js
'deps-ok': {
  options: {
    verbose: true,
    force: true // print error message, but pass the task
    skipBower: false, // do not check bower.json even if exists
    folder: 'path/to/folder/with/package.json' // options, by default current folder
  }
}
```

There are other modules that check npm dependencies, for example [grunt-check-modules](https://npmjs.org/package/grunt-check-modules).
It seems to rely on `npm ls` command that takes a long time to go through the dependency tree.
In my projects, *deps_ok* step takes less than 100ms, compared to 5-10 seconds for *grunt-check-modules*.

## Small print

Author: [Gleb Bahmutov](http://glebbahmutov.com/) &copy; 2013

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[ci-image]: https://travis-ci.org/bahmutov/grunt-deps-ok.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/grunt-deps-ok
[nodei.co]: https://nodei.co/npm/grunt-deps-ok.png?downloads=true
[dependencies-image]: https://david-dm.org/bahmutov/grunt-deps-ok.png
[dependencies-url]: https://david-dm.org/bahmutov/grunt-deps-ok
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
