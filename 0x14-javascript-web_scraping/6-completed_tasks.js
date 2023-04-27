#!/usr/bin/node
// Display number of tasks completed by user id

const request = require('request');
const api = process.argv[2];

request(api, (err, res, body) => {
  if (err) {
    console.log(err);
  } else if (res.statusCode === 200) {
    const done = {};
    const todo = JSON.parse(body);

    for (const idx in todo) {
      const task = todo[idx];
      if (task.completed === true) {
        if (done[task.userId] === undefined) {
          done[task.userId] = 1;
        } else {
          done[task.userId]++;
        }
      }
    }

    console.log(done);
  } else {
    console.log('An error occured. Status code: ' + res.statusCode);
  }
});
