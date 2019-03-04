export default function makeHeaderTemplate() {
    const html = `
    <img src="./assets/ghibli-logo.png" id="logo">
    <h1>Banana's Ghibli Film List</h1>
    <nav><a href="/index.html">All Films</a></nav>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

