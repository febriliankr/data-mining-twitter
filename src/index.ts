import axios from "axios";

const url = "https://api.twitter.com/2/tweets/search/recent";

import { TwitterClient } from "twitter-api-client";

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
});

// Search for a user
async function getUsername() {
  const data = await twitterClient.accountsAndUsers.usersSearch({
    q: "febrilian__",
  });
  console.log('data', data)
  return data;
}

getUsername()