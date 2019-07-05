
/**
 * Makes an REST call to and returns the result from the call
 *
 * @param
 * @returns
 */
const getScore = async(tweetText) => {
  var resp = await fetch("https://127.0.0.1:5000/predict", {
    method: 'post',
    body: JSON.stringify({ "sentences": tweetText }),
    headers:{
      'Content-Type': 'application/json',
    }
  }) 
  console.log(resp)

  const score = await resp.json();

  return score;
  
}

 function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.tweetText}`);
  
  getScore(request["tweetText"]).then( (score) => {
    console.log("score is:")
    console.log(score)
    sendResponse({response: score})
  })
 return true;
}



console.log("HERE I AM BACKGROUND")
browser.runtime.onMessage.addListener(handleMessage);

