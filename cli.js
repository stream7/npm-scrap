'use strict';
var Scrapper = require('./index');

function search (terms, params) {
    if (!params.short) {
        console.log('\nTerms: %s', terms, '\n');
    }

    new Scrapper(terms).search(function (err, results) {
        if (err) {
            return console.error('Error: %s', err);
        }

        printResults(results, params);
    });
}

function printResults (results, params) {
    if (!params.short) {
        console.log('Results:\n');
    }
    console.log(results.map(function (pkg) {
        if (params.short) {
            return pkg.name;
        } else {
            return 'Name: ' + pkg.name + '\n' +
                    'Author: ' + pkg.author + '\n' +
                    'Description: ' + pkg.description + '\n' +
                    'URL: ' + pkg.url + '\n' +
                    'Version: ' + pkg.version + '\n' +
                    'Stars: ' + pkg.stars + '\n';
        }
    }).join('\n'));
}

module.exports = search;
