"use strict";

module.exports = {
  modal: (movie) => {
    let movieDetails = {
      type: "modal",
      // View identifier
      callback_id: "view_1",
      title: {
        type: "plain_text",
        text: `Movie Details`,
      },
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*${movie.Title}*`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `${movie.Plot}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Year*: ${movie.Year}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Director*: ${movie.Director}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Ratings*: ${movie.imdbRating}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Genre*: ${movie.Genre}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Awards*: ${movie.Awards}`,
          },
        },
      ],
    };
    return movieDetails
  },
};
