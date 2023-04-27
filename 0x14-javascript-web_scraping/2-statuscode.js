#!/usr/bin/node
// Display the status code of a url

const request = require('request');
const URL = process.argv[2];

request(URL, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + res.statusCode);
  }
});
