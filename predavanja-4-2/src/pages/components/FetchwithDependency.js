import axios from "axios";
import React, { useState, useEffect } from "react";

export default function FetchWithDependency() {
  const [inputValue, setInputValue] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log(inputValue);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );
      const data = await response.json();
      console.log(data.sprites.other["official-artwork"].front_default);
      setData(data);
    };

    fetchData();
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        placeholder="Enter pokemon name"
        onChange={handleInputChange}
      />

      <img src={data?.sprites?.other["official-artwork"]?.front_default} />
      {data && <p>Name: {data?.name}</p>}
      {data && <p>Weight: {data?.weight / 10}</p>}
      {data && <p>Height: {data?.height * 10}</p>}
    </div>
  );
}
