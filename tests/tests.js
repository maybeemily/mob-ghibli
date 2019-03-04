import './html-equal.js';

const test = QUnit.test;

function makeListTemplate(film) {
    
}

test('list template will match HTML', assert => {
    //arrange
    const html = ` <li><a href="films.html">Castle In The Sky</a> <span>(1986)</span></li>`;
    //act
    const result = makeListTemplate(film);
    //assert
    assert.htmlEqual(result, ` <li><a href="films.html">Castle In The Sky</a> <span>(1986)</span></li>`);

});