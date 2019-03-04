import './html-equal.js';
import makeListTemplate from '../src/make-template.js';

const test = QUnit.test;

test('list template will match HTML', assert => {
    //arrange
    const film = {
        title: 'Castle In The Sky',
        year: '1986'
    };

    //act
    const result = makeListTemplate(film);
    //assert
    assert.htmlEqual(result, `<li><a href="films.html">Castle In The Sky</a> <span>(1986)</span></li>`);
});