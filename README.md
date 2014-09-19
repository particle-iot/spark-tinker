spark-tinker plugin module
=======

Spark-Tinker is a plugin made to work with the [Spark JavaScript API wrapper](https://github.com/spark/sparkjs)
and interact with the default tinker firmware included with the Spark core.
It uses node.js and can run on Windows, Mac OS X, and Linux fairly easily.
You can use it to create your own plugins and use in conjuction with the Spark API.
It's also open source so you can edit, change or even send in pull requests if you want to share!

## Installation

First, make sure you have [node.js](http://nodejs.org/) installed!

Next, open a command prompt or terminal, and install by typing:

```shell
$ npm install spark
$ npm install spark-tinker
```

## Usage

```javascript
/*jslint node: true */
"use strict";

var Spark =require('spark');

// Make sure the spark-tinker npm module is installed before
// including the plugin.
Spark.include('tinker');

Spark.on('login', function() {
  // If login is successful we get and accessToken,
  // we'll use that to call Spark API ListDevices
  var devicesPr = Spark.listDevices();

  devicesPr.then(
    // We get an array with devices back and we list them
    function(devices){
      console.log('API call List Devices: ', devices);

      // callback to be executed by each core
      var callback = function(err, data) {
        if (err) {
          console.log('An error occurred while calling function:', err);
        } else {
          console.log('function called successfully:', data);
        }
      };

      // We get the Spark core device and call Tinker commands on it:
      var core = devices[0];
      core.tinker.digitalWrite('D0', 'LOW', callback);
      //core.tinker.digitalRead('D1', callback);
      //core.tinker.analogWrite('D0', 128, callback);
      //core.tinker.analogRead('D0', callback);
    },
    function(err) {
      console.log('API call failed: ', err);
    }
  );
});

// Login as usual
Spark.login({ username: 'myUserName', password: 'MyPassword' });

```

For further examples visit the SparkJS examples directory: https://github.com/spark/sparkjs/tree/master/examples

## Getting Started

It's important that you login before executing any command and that you pull the list of devices from the cloud
before using them, since all plugins that interact with custom firmwares and work on the devices themselves.

Every function returns a [promise](http://promisesaplus.com/) for you to handle the async result,
or you can pass a callback function, or add a listner for that specific event.
(Please note that if a callback function is passed, the function will return null instead of a promise)

* More examples on how to use promises/callbacks visit: https://github.com/spark/sparkjs/tree/master/examples

## Device object

You can get a list of devices by calling: `spark.listDevices()`

This plugin will add the following functions to each device:

* digitalWrite() -> `spark.devices[0].tinker.digitalWrite();`
* digitalRead() -> `spark.devices[0].tinker.digitalRead();`
* analogRead() -> `spark.devices[0].tinker.analogRead();`
* analogWrite() -> `spark.devices[0].tinker.analogWrite();`

## Setup your dev environment

* Install your local dependencies:

```shell
$ npm install
```

* Install globally mocha, istanbul and jshint

```shell
$ npm install -g mocha
$ npm install -g istanbul
$ npm install -g jshint
```

### How to test

`make test`

### Lint your code

`make lint`

### Coverage report

`make cover`
