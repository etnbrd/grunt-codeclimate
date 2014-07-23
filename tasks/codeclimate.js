/*
 * grunt-codeclimate
 * 
 *
 * Copyright (c) 2014 Etienne Brodu
 * Licensed under the MIT license.
 */

'use strict';

var codeclimate = require('javascript-test-reporter'),
    fs = require('fs');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('codeclimate', 'Send coverage information to codeclimate', function () {

    var options = this.options(),
        done = this.async();

    if (options.file && options.token) {
      grunt.log.write('Sending coverage data...');
      codeclimate(options.file, options.token, function(err, code) {
        if (err)
          grunt.log.error('Error : ', err);
        else if (code !== 200)
          grunt.log.error('Error, received code ' + code);
        else
          grunt.log.ok();

        done();
      });
    }
  });
};