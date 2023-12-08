const axios = require("axios");
const constants = require("../../constants");
const movieModalView = require('../../views/slack');

const movieDetails = {};

movieDetails.getData = async ({ ack, body, client, logger }) => {

  ack();

  let movieData = JSON.parse(body.actions[0].value);

  const options = {
    method: "GET",
    url: `https://www.omdbapi.com/?apikey=${constants.apiKey}&i=${movieData.imdbID}`,
  };

  try {
    const response = await axios.request(options);
    const moviedata = response?.data;
    const result = await client.views.open({
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: body.trigger_id,
      // View payload
      view: movieModalView.movie.modal(moviedata)
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = movieDetails;
