import makeListTemplate from './make-template.js';

const filmList = document.getElementById('film-list');

export default function loadFilms(fakeFilms) { 
    fakeFilms.forEach(film => {
        const dom = makeListTemplate(film);
        filmList.appendChild(dom); 
    });  
}