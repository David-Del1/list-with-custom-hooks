import React from 'react';
import styled from 'styled-components';

function Character({ name, affilitation, photoUrl }) {
  return (
    <>
      <CharacterStyled>
        <img src={photoUrl} alt={name} />
        <h2> {name} </h2>
        <p> {affilitation} </p>
      </CharacterStyled>
    </>
  );
}

export default Character;

const CharacterStyled = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: #80C271;
  border: 10px solid #EFFC93;
  border-radius: 15px;
  
  img {
    height: 200px;
  }
`;
