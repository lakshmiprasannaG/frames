const fs = require('fs');

const parser = function (pokemonData) {
  const [id, name, types, speed, weight, defense] = pokemonData.split('|');
  return { id, name, types: types.split(','), speed, weight, defense };
};

const objectData = function (allData) {
  return allData.map(parser);
};

const allData = fs.readFileSync('./pokemon.csv', 'utf8').split('\n');
const parsedData = JSON.stringify(objectData(allData));

fs.writeFileSync('pokemonData.json', parsedData, 'utf8');
