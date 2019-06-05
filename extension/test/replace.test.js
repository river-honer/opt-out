const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const {expect} = require('chai');
const {
  getTweet,
  getSentimentScore,
  modifyHatefulTweet

} = require('../src/replace');

const dom = new JSDOM(`<div class="stream"><ol> 
<li>
<div class="tweet">
<div class="content">
<div class="js-tweet-text-container">
<p class="TweetTextSize  js-tweet-text tweet-text">Test sentence 1.<a class="twitter-hashtag pretty-link js-nav" data-query-source="hashtag_click"><s>#</s><strong><strong>TestHashTag1</strong></strong></a></p>
</div>
<div class="stream-item-footer">
</li>
<li>
<div class="tweet">
<div class="content">
<div class="js-tweet-text-container">
<p class="TweetTextSize  js-tweet-text tweet-text">Test sentence 2.<a class="twitter-hashtag pretty-link js-nav"  data-query-source="hashtag_click"><s>#</s><strong><strong>TestHashTag2</strong></strong></a></p>
</div>
<div class="stream-item-footer">

</li>
</ol>`);




describe('replace', () => {

    

    describe('Find elements containing tweets and replace them with something else.', () => {
      it('returns a tweet', () => {
        expect(getTweet(dom.window.document)[0]).to.equal("Test sentence 1.#TestHashTag1");
        expect(getTweet(dom.window.document)[1]).to.equal("Test sentence 2.#TestHashTag2");
      });
      it('returns a score', () => {
        expect(getSentimentScore()).to.equal();
        expect(getSentimentScore()).to.equal();
      });
      it('returns a the modified text', () => {
        expect(modifyHatefulTweet()).to.equal();
        expect(modifyHatefulTweet()).to.equal();
      });
    } ) } )