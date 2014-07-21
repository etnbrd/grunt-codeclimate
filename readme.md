# grunt-codeclimate

> Send coverage information to codeclimate

This is my first grunt plugin.
It should work as advertised, but I didn't test anything.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-codeclimate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-codeclimate');
```

## The "codeclimate" task

### Overview
In your project's Gruntfile, add a section named `codeclimate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  codeclimate: {
    options: {
      file: 'results/lcov.info',
      token: 'TOKEN'
    }
  },
})
```

### Options

#### options.file
Type: `String`

The path to the file containing coverage information in lcov format.

#### options.token
Type: `String`

The token for your project.

## Contributing
This is my first grunt plugin, I didn't had the time to write any test.
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Etienne Brodu. Licensed under the MIT license.
