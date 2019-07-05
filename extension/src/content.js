
/**
 * Retrieves the tweets
 *
 * @param document
 * @returns NodeList of tweets in feed
 */
function getTweets(){
  tweetStream = document.querySelector('.stream')
  return Array.from(tweetStream.querySelectorAll('.tweet')).map(t => t.querySelector('.tweet-text'));
}

function handleResponse(message) {
  console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}


/**
 * Makes an REST call to and returns the result from the call
 *
 * @param
 * @returns
 */
const loadPage = async() => {
  
  
  tweets = getTweets();

  tweets = [tweets[0]];

  for (i = 0; i< tweets.length; i++) { 
    console.log("We are inside LOAD PAGE")
    
    const response = browser.runtime.sendMessage({"tweetText":tweets[i].textContent})
    
    console.log("foo")
    const score = (await response).response.score;
    console.log(score)
    modifyHatefulTweet(score, tweets[i])

  }

  console.log("END of CONTENT SCRIPT")
  
}


/**
 * Modifies the DOM when the tweet is deemed hateful or not
 *
 * @param
 * @returns
 */
function modifyHatefulTweet(score, tweet) {

  if (score === 0) { console.log("modifying"); tweet.style.color = "white";}

}

console.log("HERE I AM CONTENT")
loadPage()
//document.addEventListener("DOMContentLoaded", loadPage)

// module.exports = {
//     getTweet,
//     getSentimentScore,
//     modifyHatefulTweet
//  }