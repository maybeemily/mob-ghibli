export default function makeDetailTemplate(film) {
    const html = `
    <dl>
        <section class="detail">
            <dt>Film Name</dt>
            <dd id="title">${film.title}</dd>
        </section>
        <section class="detail">
            <dt>Description</dt>
            <dd id="description">${film.description}</dd>
        </section>
        <section class="detail">
            <dt>Director</dt>
            <dd id="director">${film.director}</dd>
        </section>
        <section class="detail">
            <dt>Producer</dt>
            <dd id="producer">${film.producer}</dd>
        </section>
        <section class="detail">
            <dt>Release Date</dt>
            <dd id="release-date">${film.release_date}</dd>
        </section>
        <section class="detail">
            <dt>RT Score</dt>
            <dd id="rt-score">${film.rt_score}</dd>
        </section>
    </dl>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}