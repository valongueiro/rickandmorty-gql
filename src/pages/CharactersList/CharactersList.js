import React from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { Link } from "react-router-dom";
import styles from "./CharacterList.module.css";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (error) return <div>{error.message}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      {data.characters.results.map((character) => (
        <Link key={character.id} to={`/${character.id}`}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
