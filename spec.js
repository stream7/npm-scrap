'use strict';
var child = require('child_process');
var path = require('path');
var expect = require('chai').expect;
var concat = require('concat-stream');

var Scrapper = require('./');

describe('Scrapper', function () {
    // we are querying the npmjs.org website during our test so
    // we need to increase the timeout. We do so that we know when they
    // make a change in their html
    this.timeout(5000);

    it('should scrap correctly npmjs.org', function (done) {
        new Scrapper('backbone').search(function (err, data) {
            var backbone = data[0];
            expect(backbone.name).to.equal('backbone');
            expect(backbone).to.have.property('version');
            expect(backbone).to.have.property('url');
            expect(backbone).to.have.property('description');
            done(err);
        });
    });
});

describe('npm-scrap cli', function () {
    this.timeout(5000);

    before(function () {
        this.executable = path.join(__dirname, 'bin', 'npm-scrap');
    });

    it('should print the search results to stdout', function(done) {
        var proc = child.spawn(this.executable, ['search', 'backbone']);

        proc.stdout.pipe(concat(function (output) {
            var results = output.toString('utf8');
            var lines = results.split('\n');
            var secondLine = lines[1];
            var fourthLine = lines[3];
            var sixthLine = lines[5];

            expect(secondLine).to.equal('Terms: backbone ');
            expect(fourthLine).to.equal('Results:');
            expect(sixthLine).to.equal('Name: backbone');
            done();
        }));
    });
});
