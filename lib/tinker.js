/*
 ******************************************************************************
 * @file lib/tinker.js
 * @company Spark ( https://www.spark.io/ )
 * @source https://github.com/particle-iot/sparkjs
 *
 * @Contributors
 *    David Middlecamp (david@spark.io)
 *    Edgar Silva (https://github.com/edgarsilva)
 *    Javier Cervantes (https://github.com/solojavier)
 *
 * @brief Basic API wrapper module
 ******************************************************************************
  Copyright (c) 2014 Spark Labs, Inc.  All rights reserved.

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation, either
  version 3 of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this program; if not, see <http://www.gnu.org/licenses/>.
  ******************************************************************************
 */

/*jslint node: true */
'use strict';

/**
 * Creates a new Tinker obj
 * @constructor {Tinker}
 */
var Tinker = function(coreId, spark) {
  this.coreId = coreId;
  this.spark = spark;
};

Tinker.prototype.digitalWrite = function(pin, value, callback) {
  // Error send back to the user by the plugin can be customized to better handle
  // specific situations like incorrect firmware uploaded to the core.
  var localCb = function(err, data) {
    var tinkerError = err;
    if (err.message === 'Function not found') {
      tinkerError = new Error('digitalwrite function not found, make sure the tinker firmware was uploaded correctly to the Spark Core.');
    }
    callback(tinkerError, data);
  };
  this.spark.callFunction(this.coreId, 'digitalwrite', pin + ',' + value, localCb);
};

Tinker.prototype.digitalRead = function(pin, callback) {
  var localCb = function(err, response, data) {
    var tinkerError = err;
    if (data.error == 'function not found') {
      tinkerError = new Error('digitalread function not found, make sure the tinker firmware was uploaded correctly to the Spark Core.');
    }
    callback(tinkerError, data);
  };
  this.spark.callFunction(this.coreId, 'digitalread', localCb);
};

Tinker.prototype.analogWrite = function(pin, value, callback) {
  var localCb = function(err, response, data) {
    var tinkerError = err;
    if (data.error == 'function not found') {
      tinkerError = new Error('analogread function not found, make sure the tinker firmware was uploaded correctly to the Spark Core.');
    }
    callback(tinkerError, data);
  };
  this.spark.callFunction(this.coreId, 'analogwrite', pin + ',' + value, callback);
};

Tinker.prototype.analogRead = function(pin, callback) {
  var localCb = function(err, response, data) {
    var tinkerError = err;
    if (data.error == 'function not found') {
      tinkerError = new Error('analogread function not found, make sure the tinker firmware was uploaded correctly to the Spark Core.');
    }
    callback(tinkerError, data);
  };
  this.spark.callFunction(this.coreId, 'analogread', pin, localCb);
};

Tinker.prototype.flash = function(callback) {
  this.spark.flashTinker(this.coreId, callback);
};


/*
// Flash a custom binary to the spark core
Tinker.prototype.flash = function(callback) {
  this.spark.flashCore(this.coreId, './firmware/Tinker', callback);
};
*/

module.exports = Tinker;
