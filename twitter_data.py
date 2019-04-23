# -------------------
# Setup
# -------------------

# pip install searchtweets

# Store credentials in a yaml file located in the home directory titled:
# "~/.twitter_keys.yaml". The credential parsing methods will automatically
# find the yaml file and it should be in the follow format:

# search_tweets_api:
#   account_type: premium
#   endpoint: <FULL_URL_OF_ENDPOINT>
#   consumer_key: <CONSUMER_KEY>
#   consumer_secret: <CONSUMER_SECRET>

# Do not publsih the yaml file. Add to .gitignore

# -------------------
# Code
# -------------------

# import libraries
from searchtweets import ResultStream, gen_rule_payload, load_credentials, collect_results

# setup premium
premium_search_args = load_credentials("~/.twitter_keys.yaml",
                                       yaml_key="search_tweets_premium",
                                       env_overwrite=False)

# Create search rule
rule = gen_rule_payload("suck dick bitch", results_per_call=100)

# Retrieve tweets
tweets = collect_results(rule,
                         max_results=100,
                         result_stream_args=premium_search_args)
