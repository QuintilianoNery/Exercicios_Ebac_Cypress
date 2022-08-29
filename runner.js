const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  // specs to run here
  browser: 'chrome',
  config: {
    video: true
  }
})
.then((results) => {
  console.log(results)
  const args = {
    target: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA2MWRkNGYxLTcxOWYtNGQ4Ni05ZjBlLWEwMWY2NmVkYjQzNy0xNjYwMjc4MzE4ODcxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiY2RmNzQ3NmItMTc3NS00ZWU5LWFhZDYtNzY5YmVkZjk3MzM5IiwidHlwZSI6InQifQ.eitxXB-5tFJJEzFlGkzVOs_25FABMUGfIYrJIZ6ZaKw',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
