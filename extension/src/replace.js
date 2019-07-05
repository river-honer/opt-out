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
  
  tweets =  [ "@j_kloiber Hey my love, do you reckon we could hold a workshop on the 5th July too?","Bitch suck dick", "Hi! I’m unfortunately not around that day... sorry! (Let me see if I can figure something out with the keys..)", "Hey my love, any news on the 5th?", "@j_kloiber Hey my love, do you reckon we could hold a workshop on the 5th July too?", "Hi! I’m unfortunately not around that day... sorry! (Let me see if I can figure something out with the keys..)", "did i mention you are the best?!", "@j_kloiber Hey my love, do you reckon we could hold a workshop on the 5th July too?", "Hi! I’m unfortunately not around that day... sorry! (Let me see if I can figure something out with the keys..)"]
  for (i = 0; i< tweets.length; i++) { 
  console.log(tweets[i])  
  var resp = await fetch("https://127.0.0.1:5000/predict", {
    method: 'post',
    body: JSON.stringify({ "sentences": tweets[i] }),
    headers:{
      'Content-Type': 'application/json',
    }
  }) 

  const score = await resp.json();

  tweet[i] = modifyHatefulTweet(score['score'], tweets[i])

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


tweet = "I like you" // will eventually be getTweet
//console.log(getTweet(document))
document.addEventListener("DOMContentLoaded", loadPage)

module.exports = {
    getTweet,
    getSentimentScore,
    modifyHatefulTweet
 }