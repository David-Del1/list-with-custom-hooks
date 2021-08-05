/* eslint-disable max-len */
// eslint-disable-next-line max-len
const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

export const fetchChars = async (page) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`);
  const characters = await res.json();
  console.log(characters);
  return characters;
};

export const fetchCharacter = async (_id) => {
  const res = await fetch(`${URL}/${_id}`);

  return res;
};
