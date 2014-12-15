'use strict';
var Scrapper = require('./index');

function search (terms) {
    console.log('\nTerms: %s', terms, '\n');

    new Scrapper(terms).search(function (err, results) {
        if (err) {
            return console.error('Error: %s', err);
        }

        printResults(results);
    });
}

function printResults (results) {
    console.log('Results:\n');
    console.log(results.map(function (pkg) {
        return 'Name: ' + pkg.name + '\n' +
                'Description: ' + pkg.description + '\n' +
                'URL: ' + pkg.url + '\n' +
                'Version: ' + pkg.version + '\n';
    }).join('\n'));
}

module.exports = search;
