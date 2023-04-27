#!/usr/bin/node
// Display number of movies where the a given character is
// present

const request = require('request');
const api = process.argv[2];

request(api, (err, response, body) => {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const movies = JSON.parse(body).results;
    let cnt = 0;

    for (const newMovie in movies) {
      const actors = movies[newMovie].characters;
      for (const idx in actors) {
        if (actors[idx].includes('18')) {
          cnt = cnt + 1;
        }
      }
    }

    console.log(cnt);
  } else {
    console.log('An error occured. Status code: ' + response.statusCode);
  }
});
