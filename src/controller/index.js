"use strict";

const { app } = require(`../app`);
const slack = require(`./slack`);

app.command('/movie-search', slack.availableMovies.getAllSuggestions);

app.action("view_more", slack.movie.getData);

app.message('knock knock', async ({ message, say }) => {
    await say(`_Who's there?_`);
});