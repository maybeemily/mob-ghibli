import loadFilms from './load-films.js';
import makeHeaderTemplate from './header-template.js';

const header = document.getElementById('header');
const dom = makeHeaderTemplate();
header.appendChild(dom);

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url)
    .then(response => response.json())
    .then(results => {loadFilms(results);
    });

