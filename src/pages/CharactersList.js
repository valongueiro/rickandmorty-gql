import { useCharacters } from "../hooks/useCharacters";
import React from "react";
import styles from "./CharacterList.module.css";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (error) return <div>{error.message}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
