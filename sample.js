
var latestTweets = require('latest-tweets')

latestTweets('enteryour twitter id', function (err, tweets) {

    console.log(tweets)
})
