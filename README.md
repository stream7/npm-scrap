# npm-scrap

[![Build status](https://secure.travis-ci.org/stream7/npm-scrap.svg?branch=master)](http://travis-ci.org/stream7/npm-scrap)

Scrap npm website for search results.

## Installation

```
npm install -g npm-scrap

``` 

## Usage

#### CLI

```
npm-scrap [options] <terms...>

Scrap npmjs.com and return search results

Options:

  -h, --help     output usage information
  -V, --version  output the version number
  -s, --short    Show only package title
```

#### API

```javascript
var scrap = require('npm-scrap');
var terms = ['backbone', 'marionette'];

scrap(terms, function (err, results) {
    if (err) {
        return console.error('Error: %s', err);
    }

    console.log(results);
});
```
