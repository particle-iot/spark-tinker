sparkjs
=======

Spark-Tinker is a plugin made to work with [Spark Api](https://github.com/spark/spark-tinker)
and interact with the default tinker firmware included with the Spark core.
It uses node.js and can run on Windows, Mac OS X, and Linux fairly easily.
You can use it to create your own plugins and use in conjuction with the Spark Api.
It's also open source so you can edit, change or even send in pull requests if you want to share!

## Instalation

First, make sure you have [node.js](http://nodejs.org/) installed!

Next, open a command prompt or terminal, and install by typing:

```shell
$ npm install spark
$ npm install spark-tinker
```

## Usage

```javascript
var spark = require('spark');

spark.login({ username: 'email@example.com', password: 'password' }, function(err, body) {
  console.log('API call login completed on callback:', body);
});
```

For further examples visit /examples directory: https://github.com/spark/sparkjs/tree/master/examples

## Getting Started

It's important that you login before executing any command and that you pull the list of devices from the cloud
before using them, since all plugins that interact with custom firmwares and work on the devices themselves.

Every function returns a [promise](http://promisesaplus.com/) for you to handle the async result,
or you can pass a callback function, or add a listner for that specific event.
(Please note that if a callback function is passed, the function will return null instead of a promise)

* More examples on how to use promises/callbacks visit: https://github.com/spark/sparkjs/tree/master/examples

## Device object

You can get a list of devices by calling: `spark.getDevices()`

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
