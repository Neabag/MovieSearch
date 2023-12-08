const axios = require("axios");
const constants = require("../../constants");
const moviesListView = require('../../views/slack');
const { app } = require(`../../app`); 

const showMovies = {};
showMovies.getAllSuggestions = async ({ command, ack, respond, say }) => {
  ack();

  //   console.log(`Command object is ${JSON.stringify(command)}`);
  console.log("test", command);

  const options = {
    method: "GET",
    url: `https://www.omdbapi.com/?apikey=${constants.apiKey}&s=${command.text}`,
  };
  //   let suggestions = [];
//   const blocks = [];
  try {
    const response = await axios.request(options);
    // console.log("API repsonse", response);
    if (
      response.data &&
      response.data.Search &&
      response.data.Search.length > 0
    ) {
    //   await say(moviesListView.moviesList.modal(response.data.Search))
      await respond(moviesListView.moviesList.modal(response.data.Search));
    } else {
      await respond(`ohh no!! your search doesn't exist in our database`);
    }
  } catch (error) {
    console.error(error);
    await respond(
      `ohh snap!! we encountered this error while interacting to API: ${error}`
    );
  }
};

module.exports = showMovies;
