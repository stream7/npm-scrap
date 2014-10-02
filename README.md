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
npm-scrap [options] [command]

Commands:

  search <terms>
     Scrap npmjs.org and return search results


Options:

  -h, --help     output usage information
  -V, --version  output the version number
```

#### API

```javascript
var Scrapper = require('npm-scrap');
var terms = 'backbone marionette';

new Scrapper(terms).search(function (err, results) {
    if (err) {
        return console.error('Error: %s', err);
    }

    console.log(results);
});
```
