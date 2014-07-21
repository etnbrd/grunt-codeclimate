/*
 * grunt-codeclimate
 * 
 *
 * Copyright (c) 2014 Etienne Brodu
 * Licensed under the MIT license.
 */

'use strict';

var Formatter = require('../lib/formatter'),
    client    = require('../lib/http_client'),
    fs        = require('fs')

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('codeclimate', 'Send coverage information to codeclimate', function () {

    var options = this.options(),
        done = this.async();

    if (options.file && options.token) {

      var formatter = new Formatter()
      formatter.format(options.file, function(err, json) {

        console.log('trc')

        if (err) {
          console.log("A problem occurred parsing the lcov data", err);
        } else {

          json['repo_token'] = options.token || process.env.CODECLIMATE_REPO_TOKEN;

          var res = client.postJson(json, done);
        }
      });
    }
  });
};
