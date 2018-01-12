// assertion library
import {expect} from 'chai';
// dom manipulation library
import jsdom from 'jsdom';
// node filesystem library
import fs from 'fs';

describe('First test', () => {
    it('should be true', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8"); // get link to the page
        jsdom.env(index, function(err, window){ // define jsdom environment and pass the content of the page
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
            window.close();
        }); 
        
    });
});