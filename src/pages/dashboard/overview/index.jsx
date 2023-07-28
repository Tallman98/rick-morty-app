import React, { useEffect, useState } from "react";
import axios from "axios";

const Overview = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCharacters = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(response.data.results);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="mb-4 font-bold text-[28px]">Characters</h1>
      <div className="grid grid-cols-12 gap-4">
        {characters.map((character) => (
          <div className="col-span-3" key={character.id}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <p className="font-medium text-[18px]">{character.name}</p>
            <p className="text-gray-500 font-medium">
              Species: {character.species}
            </p>
            <p className="text-[12px]">Status: {character.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
