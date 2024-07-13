// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="pokemon-container">
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
