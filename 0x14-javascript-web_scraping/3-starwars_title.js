#!/usr/bin/node
// Display Star War movie title

const request = require('request');

const movieID = process.argv[2];
const apiEndpoint = 'https://swapi-api.alx-tools.com/api/films/';

request(apiEndpoint + movieID, (err, res, body) => {
  if (err) {
    console.log(err);
  } else if (res.statusCode === 200) {
    const resJSON = JSON.parse(body);
    console.log(resJSON.title);
  } else {
    console.log('Error code: ' + res.statusCode);
  }
});
