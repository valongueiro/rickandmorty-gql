import React from "react";
import { useCharacter } from "../hooks/useCharacter";

const Character = () => {
  const { error, loading, data } = useCharacter(4);
  console.log({ error, loading, data });

  return <div>Character</div>;
};

export default Character;
