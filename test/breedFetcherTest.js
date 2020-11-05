// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error when the selected breed is not found', (done) => {
    fetchBreedDescription('Siberianfds', (error, desc) => {
      // we expect an error for this scenarior
      assert.equal(desc, null);
      
      const expectedError = `Error: Breed Siberianfds not found`

      // compare returned error

      assert.equal(expectedError, error);

      done();
    });
  });

});

