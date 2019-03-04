import './html-equal.js';
import makeListTemplate from '../src/make-template.js';
import makeDetailTemplate from '../src/detail-template.js';

const test = QUnit.test;

test('list template will match HTML', assert => {
    //arrange
    const film = {
        title: 'Castle In The Sky',
        release_date: '1986',
        id: '12345'
    };

    //act
    const result = makeListTemplate(film);
    //assert
    assert.htmlEqual(result, '<li><a href="films.html?id=12345">Castle In The Sky</a> <span>(1986)</span></li>');
});


test('detail template will populate with film detail', assert => {
    //arrange
    const film = {
        id: '12345',
        title: 'Castle In The Sky',
        description: 'The orphan...', 
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata',
        release_date: '1986',
        rt_score: '95'  
    };
    //act
    const result = makeDetailTemplate(film);

    //assert

    assert.htmlEqual(result, /*html*/`
    <dl>
        <section class="detail">
            <dt>Film Name</dt>
            <dd id="title">Castle In The Sky</dd>
        </section>
        <section class="detail">
            <dt>Description</dt>
            <dd id="description">The orphan...</dd>
        </section>
        <section class="detail">
            <dt>Director</dt>
            <dd id="director">Hayao Miyazaki</dd>
        </section>
        <section class="detail">
            <dt>Producer</dt>
            <dd id="producer">Isao Takahata</dd>
        </section>
        <section class="detail">
            <dt>Release Date</dt>
            <dd id="release-date">1986</dd>
        </section>
        <section class="detail">
            <dt>RT Score</dt>
            <dd id="rt-score">95</dd>
        </section>
    </dl>`);
});