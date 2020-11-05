const request = require('request');


const url = 'https://api.thecatapi.com/v1/breeds/search/?q=';
const breed = process.argv[2];
// console.log(`${url}${breed}`)

request(`${url}${breed}`, (error, response, body) => {
  if(error !== null){
    return console.error(`Error: ${error}`)
  }
  const data  = JSON.parse(body);
  // console.log(error);

  if (data.length < 1) {
    return console.error(`Error: Breed ${breed} not found`);
  } 
  return console.log(data[0].description.trim());
});