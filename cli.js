var Scrapper = require('./index');

function search (terms) {
    console.log('\nTerms: %s', terms, '\n');
    new Scrapper(terms).search(function (err, results) {
        if (err) return console.error('Error: %s', err);

        console.log('Results:\n');
        console.log(results.map(function (pkg) {
            return 'Name: ' + pkg.name + '\n' +
                    'Description: ' + pkg.description + '\n' +
                    'URL: ' + pkg.url + '\n' +
                    'Version: ' + pkg.version + '\n' +
                    'Author: ' + pkg.author + '\n';
        }).join('\n'));
    });
}

module.exports = search;