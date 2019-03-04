import loadFilms from './load-films.js';

const url = 'https://ghibliapi.herokuapp.com/films';

fetch(url).then(response => response.json()).then(results => {loadFilms(results);});
