import makeListTemplate from './make-template.js';
import fakeFilms from '../data/fake-films.js';

const filmList = document.getElementById('film-list');

function loadFilms(fakeFilms) { 
    fakeFilms.forEach(film => {
        const dom = makeListTemplate(film);
        filmList.appendChild(dom); 
    });  
}

loadFilms(fakeFilms);