#!/usr/bin/node
// Stores content of a webpage in a file

const request = require('request');
const fs = require('fs');

const webPage = process.argv[2];
const storeFile = process.argv[3];

request(webPage, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFileSync(storeFile, body);
  }
});
