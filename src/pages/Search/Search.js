import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { called, error, loading, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log(called);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}
      {data && (
        <ul>
          {data.characters.results.map((result) => {
            return <li key={result.location.id}>{result.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
