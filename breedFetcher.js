const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search/?q=';
// const breed = process.argv[2];
// console.log(`${url}${breed}`)

const fetchBreedDescription = (breedName, callback) => {
  request(`${url}${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data  = JSON.parse(body);
    if (data.length < 1) {
      error = `Error: Breed ${breedName} not found`
      return callback(error, null);
    }
    return callback(null, data[0].description.trim());
  });

};

module.exports = { fetchBreedDescription };