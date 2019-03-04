# mob-ghibli

# Ghibli Films or Drag Race Queens

Build a two-page app driven by data from an API. Choose either:

1. [Ghibili Studio Films API](https://ghibliapi.herokuapp.com/)
    1. List of films: `https://ghibliapi.herokuapp.com/films`
    1. Film by ID: `https://ghibliapi.herokuapp.com/films/<id>`
1. [Drag Race API](https://drag-race-api.readme.io/docs)
    1. List of all queens: `http://www.nokeynoshade.party/api/queens/all`
    1. List of Queen by ID: `http://www.nokeynoshade.party/api/queens/<id>`
  
## Main List Page

The main list of things page, `index.html`, should fetch and display a list of items (films or queens).

1. Use DDD to design, then make into a tested template
1. The template for each item should include a clickable lick (`<a>`) that naviages to the detail
page with a query string `?id=<id of item>`.
1. Create a list component that exports a load function
1. In `index.js`, use `fetch` to get the data, then call the load function with the data

## Detail Page

The second page, either `film-detail.html` or `queen-detail.html`, should fetch the detail information
specified by the `id` in the url. Remember this will need to use a different file than `index.js` 
(like `film-detail.js` or `queen-detail.js`).

1. Use DDD to design, then make into a tested template
1. Create a detail component that exports a load function
1. In `film-detail.js` or `queen-detail.js`, use `fetch` to get the data, then call the load function with the data

## BONUS: Common Header

Turn the header into a component. 

1. It doesn't need to take any data.
1. Add a navigation link to "all films" or "all queens"
1. Should still be tested using DDD process
1. Export a `loadHeader` function that is imported and called from both `index.js` and your `<item>-detail.js` main scripts