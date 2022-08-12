const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA2MWRkNGYxLTcxOWYtNGQ4Ni05ZjBlLWEwMWY2NmVkYjQzNy0xNjYwMjc4MzE4ODcxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjdlNGZiY2MtYWNkNy00MTMyLWI4MmQtNzMwYWFlOTA1ZTdiIiwidHlwZSI6InQifQ.pseS0OLYvY7xbPF6WHY2tBgxca8q5C7JWpuX3gZam-k',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
