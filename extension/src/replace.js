/**
 * Retrieves the tweets
 *
 * @param document
 * @returns NodeList of tweets in feed
 */
function getTweet(d){
  tweetStream = d.querySelector('.stream')
  return Array.from(tweetStream.querySelectorAll('.tweet')).map(t => t.querySelector('.tweet-text').textContent);
}

/**
 * Makes an REST call to and returns the result from the call
 *
 * @param
 * @returns
 */
const loadPage = async() => {
  console.log("HERE")
  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: 'post',
    body: { "sentences": "test" },
    headers:{
      'Content-type': 'application/json'
    }
  }); // Call the fetch function passing the url of the API as a parameter
  const myJson = await response.json();
  console.log(myJson)
  console.log("NOW HERE")
  
}

/**
 * Modifies the DOM when the tweet is deemed hateful or not
 *
 * @param
 * @returns
 */
function modifyHatefulTweet() {

}

//console.log(getTweet(document))
document.addEventListener("DOMContentLoaded", loadPage)

  module.exports = {
    getTweet,
    getSentimentScore,
    modifyHatefulTweet
 }