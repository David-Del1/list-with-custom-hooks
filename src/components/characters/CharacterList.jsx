import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from './Character';
import { useCharacters } from '../../state/character';
import styled from 'styled-components';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters(page);

  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Link to={`/characters/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <>
      <ButtonStyled
        disabled={page <= 1}
        onClick={() => setPage(prevPage => prevPage - 1)}
      >
        ⬅️
      </ButtonStyled>
      {page}
      <ButtonStyled
        onClick={() => setPage(prevPage => prevPage + 1)}
      >
        ➡️
      </ButtonStyled>
    
      <ListStyled>
        {characterElements}
      </ListStyled>
    </>
  );
};

export default CharacterList;

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

`;

const ButtonStyled = styled.button`
  font-size: 1.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

