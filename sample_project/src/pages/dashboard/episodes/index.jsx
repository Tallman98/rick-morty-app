import React, { useEffect, useState } from "react";
import axios from "axios";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEpisodes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      setEpisodes(response.data.results);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="mb-4 font-bold text-[28px]">Episodes</h1>
      <div className="grid grid-cols-12 gap-4">
        {episodes.map((episode) => (
          <div className="col-span-3" key={episode.id}>
            <p className="font-medium text-[18px]">{episode.name}</p>
            <p className="text-gray-500 font-medium">
              Air Date: {episode.air_date}
            </p>
            <p className="text-[12px]">Episode: {episode.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
