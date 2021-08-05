import { useEffect, useState  } from 'react';
import { fetchCharacter, fetchChars } from '../services/avatarApi';

export const useCharacters = (page) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchChars(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return { characters, loading };
};

export const useCharacter = (_id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(_id)
      .then(setCharacter);
  }, []);

  return character;
};

