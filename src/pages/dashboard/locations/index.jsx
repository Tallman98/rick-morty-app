import React, { useEffect, useState } from "react";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLocations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      setLocations(response.data.results);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="mb-4 font-bold text-[28px]">Locations</h1>
      <div className="grid grid-cols-12 gap-4">
        {locations.map((location) => (
          <div className="col-span-3" key={location.id}>
            <p className="font-medium text-[18px]">{location.name}</p>
            <p className="text-gray-500 font-medium">
              Dimensions: {location.dimensions}
            </p>
            <p className="text-[12px]">Type: {location.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
