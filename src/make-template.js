export default function makeListTemplate(film) {
    const html = `<li><a href="films.html">${film.title}</a> <span>(${film.year})</span></li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}