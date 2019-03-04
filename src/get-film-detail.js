import makeDetailTemplate from './detail-template.js';
import makeHeaderTemplate from './header-template.js';

const header = document.getElementById('header');
const dom = makeHeaderTemplate();
header.appendChild(dom);

const detailList = document.getElementById('detail-list');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

if(!id) {
    window.location = './';
}

const url = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(url)
    .then(response => response.json())
    .then(result => {
        loadFilmDetail(result);
    });

function loadFilmDetail(film) {
    const dom = makeDetailTemplate(film);
    detailList.appendChild(dom);
}
