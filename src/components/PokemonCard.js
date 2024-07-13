// src/components/PokemonCard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    fetchData();
  }, [pokemon.url]);

  return (
    pokemonData && (
      <div className="pokemon-card">
        <h3>{pokemonData.name}</h3>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <p>ID: {pokemonData.id}</p>
        <p>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      </div>
    )
  );
};

export default PokemonCard;
