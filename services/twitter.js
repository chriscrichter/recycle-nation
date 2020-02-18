const Twitter = require('twitter-stream-channels');
const twitterConfig = require("../config").twitter;
const client = new Twitter(twitterConfig);

module.exports = {
  createStreams: channels => client.streamChannels({ track:channels })
};
