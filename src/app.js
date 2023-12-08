"use strict";

// Require the Bolt for JavaScript package (github.com/slackapi/bolt);
const { App } = require("@slack/bolt");
require('dotenv').config();

const app = new App({
    signingSecret: process.env.SIGNING_SECRET,
    clientId: process.env.CLIENT_ID,
    convoStore: false,
    socketMode: true,
    token: process.env.BOT_TOKEN,
    appToken: process.env.APP_TOKEN
});

module.exports = { app };