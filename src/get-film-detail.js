import fakeFilms from '../data/fake-films.js';
import makeDetailTemplate from './detail-template.js';

const detailList = document.getElementById('detail-list');
const searchParams = new URLSearchParams(window.location.search);
const filmToFind = searchParams.get('id');
let populateFilm = null;

for(let i = 0 ; i < fakeFilms.length; i++) {
    let currentFilm = fakeFilms[i];
    if(currentFilm.id === filmToFind.id) {
        populateFilm = currentFilm;
    }
}

const dom = makeDetailTemplate(populateFilm);
detailList.appendChild(dom);