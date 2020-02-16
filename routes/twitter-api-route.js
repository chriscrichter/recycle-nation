// //  API key:
// wGbATRjTXwtxhfjjs3TTfSSNz

// API secret key:
// 1qIh08iAUIf3f0o9lUctZY9xUGCz0zj00RPHPnxFQARF2lTDph

// Access token :759962762218962944-CkKCvAWQ9gOOao7b16lY4fyNHVBnSh8
// Copy
// Access token secret :DudaLUjjjDwO7DnYrUrdd4xE6xfI7awCbN33pPdsGhx8S


// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: 'wGbATRjTXwtxhfjjs3TTfSSNz',
//   consumer_secret: '1qIh08iAUIf3f0o9lUctZY9xUGCz0zj00RPHPnxFQARF2lTDph',
//   access_token_key: '759962762218962944-CkKCvAWQ9gOOao7b16lY4fyNHVBnSh8',
//   access_token_secret: 'DudaLUjjjDwO7DnYrUrdd4xE6xfI7awCbN33pPdsGhx8S'
// });
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });


// client.stream('statuses/filter', {track: 'arsenal'},  function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//   });
// });