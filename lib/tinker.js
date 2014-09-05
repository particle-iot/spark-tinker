/*
 ******************************************************************************
 * @file lib/tinker.js
 * @company Spark ( https://www.spark.io/ )
 * @source https://github.com/spark/sparkjs
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

Tinker.prototype.digitalWrite = function(pin, param, callback) {
  this.spark.callFunction(this.coreId, 'digitalWrite', pin + ':' + param, callback);
};

Tinker.prototype.digitalRead = function(pin, param, callback) {
  this.spark.callFunction(this.coreId, 'analogRead', pin + ':' + param, callback);
};

Tinker.prototype.analogRead = function(pin, param, callback) {
  this.spark.callFunction(this.coreId, 'analogRead', pin + ':' + param, callback);
};

Tinker.prototype.analogWrite = function(pin, param, callback) {
  this.spark.callFunction(this.coreId, 'analogWrite', pin + ':' + param, callback);
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
