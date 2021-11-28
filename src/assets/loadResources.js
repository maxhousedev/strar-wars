import fetchStarWars from './fetch';
// star wars resources
const resources = ['films', 'planets', 'species'];

const StarWarsPromises = [];

for (let i = 0; i < resources.length; i++) {
  StarWarsPromises.push(fetchStarWars(resources[i]));
}

export default StarWarsPromises;
