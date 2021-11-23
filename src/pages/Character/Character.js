import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import styles from "./Character.module.css";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <div>{error.message}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <img
        src={data.character.image}
        alt={data.character.name}
        width={750}
        height={750}
      />
      <div className={styles.content}>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className={styles.episode}>
          {data.character.episode.map((episode) => (
            <p key={episode.episode}>
              {episode.name} — {episode.episode}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
