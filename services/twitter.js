var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'wGbATRjTXwtxhfjjs3TTfSSNz',
  consumer_secret: '1qIh08iAUIf3f0o9lUctZY9xUGCz0zj00RPHPnxFQARF2lTDph',
  access_token_key: '759962762218962944-CkKCvAWQ9gOOao7b16lY4fyNHVBnSh8',
  access_token_secret: 'DudaLUjjjDwO7DnYrUrdd4xE6xfI7awCbN33pPdsGhx8S'
});
var stream = client.stream('statuses/filter', {track: 'javascript'});
module.exports = stream;