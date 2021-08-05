import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/character';

function CharacterDetails() {
  const { _id } = useParams();
  const character = useCharacter(_id);
  console.log(character);
  if(!character) return <h1>Loading...</h1>;
  
  return (
    <div>
      <h2>Character Details</h2>
      <img src={character.photoUrl} alt={character.name} />
      <h3> {character.name} </h3>
      <p> {character.affiliation} </p>
    </div>
  );
}

export default CharacterDetails;


