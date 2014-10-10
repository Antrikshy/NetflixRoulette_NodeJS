NetflixRoulette Node.js API
===========================

[![NPM Downloads](http://img.shields.io/npm/dm/netflix-roulette.svg?style=flat)](https://www.npmjs.org/package/netflix-roulette)
[![NPM Version](https://img.shields.io/npm/v/netflix-roulette.svg?style=flat)](https://www.npmjs.org/package/netflix-roulette)
[![License](http://img.shields.io/npm/l/express.svg?style=flat)](https://www.npmjs.org/package/netflix-roulette)

A very simple, fully-functional Node wrapper for [NetflixRoulette's API](http://netflixroulette.net/api/) that I wrote for some practical experience with Node. Add this module as a dependency in your Node project to access NetflixRoulette with a few easy-to-use functions.

Instructions
------------

###Install

Use `npm install netflix-roulette` in your Node.js project folder.

This will create a new `node_modules` folder if one does not already exist. Add it to your dependencies in `package.json`.

###Require

`var NetflixRoulette = require('netflix-roulette');`

###Use

The API currently has three parameters, `title`, `actor` and `director`. This module allows you to query any of them through rather intuitive functions. Since it is an open API, you do not need keys or authentication of any sort.

1. `NetflixRoulette.title('Tucker & Dale vs. Evil', callbackFunc(error, data), 2010);`   
[year parameter is optional]

2. `NetflixRoulette.actor('Keira Knightley', callbackFunc(error, data));`

3. `NetflixRoulette.director('Christopher Nolan', callbackFunc(error, data));`

The `error` value is set only when there is a problem requesting data from the API. Any errors in *finding* the data will be reported in the `data` variable with `error == null`.

Refer to [NetflixRoulette's API guide](http://netflixroulette.net/api/) for details on returned data.

Contact
-------

Report any bugs from the [Issues section](https://github.com/Antrikshy/NetflixRoulette_NodeJS/issues).

If you have any questions, contact me [@Antrikshy](http://twitter.com/Antrikshy). You can reach, Andrew, the developer of NetflixRoulette [@CodeusaSoftware](https://twitter.com/codeusasoftware).
