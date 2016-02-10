'use strict';
var request = require('request');
var cheerio = require('cheerio');

var scrap = function (terms, cb) {
    var url = 'https://www.npmjs.com/search?q=' + encodeURIComponent(terms.join(' '));

    request(url, function (err, res, body) {
        if (err) {
            return cb(err);
        }

        var $ = cheerio.load(body);
        var results = [];

        $('.package-details').each(function () {
            results.push({
                name: $(this).find('.name').text(),
                description: $(this).find('.description').text(),
                author: $(this).find('.author').text(),
                stars: $(this).find('.stars').text(),
                version: $(this).find('.version').text().match(/\d+\.\d+\.\d+/)[0],
                url: 'https://www.npmjs.com/package/' + $(this).find('.name').text()
            });
        });

        cb(null, results);
    });
};

module.exports = scrap;
