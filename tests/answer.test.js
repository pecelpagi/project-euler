'use strict';

let fs = require('fs');
let answers = require('./answers');

let files = fs.readdirSync(`${__dirname}/../solutions`);

for (let i = 0; i < files.length; i++) {
    describe(`Problem #${i + 1}`, () => {
        const fileName = files[i].replace('.js', '');

        let answer = require(`../solutions/${fileName}`);
        const expectedAnswer = answers[fileName];

        it(`the answer is: ${answer}`, () => {
            expect(answer).toBe(expectedAnswer);
        });
    });
}
