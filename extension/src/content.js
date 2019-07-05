/**
 * Retrieves the tweets
 *
 * @param document
 * @returns NodeList of tweets in feed
 */
function getTweets(){
  tweetStream = document.querySelector('.stream')
  return Array.from(tweetStream.querySelectorAll('.tweet')).map(t => t.querySelector('.tweet-text').textContent);
}

/**
 * Makes an REST call to and returns the result from the call
 *
 * @param
 * @returns
 */
const loadPage = async() => {
  
  
  tweets = getTweets();

  //tweets = [tweets[0]];

  for (i = 0; i< tweets.length; i++) { 
    console.log("We are inside LOAD PAGE")
    response = browser.runtime.sendMessage({"tweetText":tweets[i]})
    console.log("foo")
    console.log(response)
    const score = await response;

 // tweet[i] = modifyHatefulTweet(score['score'], tweets[i])

  }
  console.log(tweets[1])

  console.log("NOW HERE")
  
}


/**
 * Modifies the DOM when the tweet is deemed hateful or not
 *
 * @param
 * @returns
 */
function modifyHatefulTweet(score, tweet) {

  if (score === 1) { tweet = "HARASSING";   console.log("in modify"); console.log(tweet); return tweet;}

}

console.log("HERE I AM CONTENT")
loadPage()
//document.addEventListener("DOMContentLoaded", loadPage)

// module.exports = {
//     getTweet,
//     getSentimentScore,
//     modifyHatefulTweet
//  }