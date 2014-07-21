/*
 * grunt-codeclimate
 * 
 *
 * Copyright (c) 2014 Etienne Brodu
 * Licensed under the MIT license.
 */

'use strict';

var Formatter = require("../lib/formatter"),
    client    = require('../lib/http_client');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('codeclimate', 'Send coverage information to codeclimate', function () {

    var options = this.options();

    if (options.file && options.token) {
      require('fs').readFile(options.file, function(err, file) {
          formatter = new Formatter()
          formatter.format(input, function(err, json) {
          if (err) {
            console.error("A problem occurred parsing the lcov data", err);
          } else {

            json['repo_token'] = options.token || process.env.CODECLIMATE_REPO_TOKEN;

            client.postJson(json);
          }
        });
      })
    }
  });
};
