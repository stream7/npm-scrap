var request = require('request');
var cheerio = require('cheerio');

var Scrapper = function (terms) {
    this.terms = terms;
}

Scrapper.prototype.search = function (cb) {
    request('https://www.npmjs.org/search?q=' + encodeURIComponent(this.terms), function (err, res, body) {
        if (err) return cb(err);

        $ = cheerio.load(body);

        var results = [];

        $('.search-result.package').each(function (package) {
            results.push({
                name: $(this).find('h2 a').text(),
                description: $(this).find('.description').text(),
                version: $(this).find('.version').text().match(/\d+\.\d+\.\d+/)[0],
                author: $(this).find('.version a').text(),
                url: 'https://www.npmjs.org' + $(this).find('h2 a').attr('href')
            });
        });

        this.results = results;

        cb(null, this.results);
    }.bind(this));
}

module.exports = Scrapper;
