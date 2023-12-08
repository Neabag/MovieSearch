"use strict";

module.exports = {
    modal: (movies) => {
        const blocks =[];
        blocks.push({
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Namaste! I found below movies relevant to your search*`,
            },
          });
          blocks.push({
            type: "divider",
        });
        for (let i = 0; i < movies.length; i++) {
            const item = movies[i];
            const imgBlock = {
              type: "image",
              image_url: `${item.Poster}`,
              alt_text: `${item.Title}`,
            };
            const block = {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*${item.Title}* \n Year: ${item.Year}`,
              },
              accessory: {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "View More",
                },
                value: `${JSON.stringify(item)}`,
                action_id: "view_more",
              },
            };
            blocks.push(imgBlock);
            blocks.push(block);
            //Add Devider
            if (i < movies.length - 1) {
              blocks.push({
                type: "divider",
              });
            }
          }
        return {blocks};
      },
}


