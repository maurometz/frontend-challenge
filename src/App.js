/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-extend-native */
/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import React from "react";
import { useState } from 'react';
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState(" ");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  // const [pokemonType2, setPokemonType2] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      // setPokemonType2(res.data.types[1].type.name)
      setPokemonData(toArray);
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }


  return (
    <div className="App">
      <aside className="menu">
        <div className="menu-content">
          <a className="imagem-link" href="#"><img src="https://i.ibb.co/yQmt4xW/logo.png" /></a>
          
            <ul className="nav-bar">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          
        </div>
      </aside>
      <div>
      <form className="pesquisa" onSubmit={handleSubmit}>
        <label>
          <input className="escrever-pesquisa" type="text" onChange={handleChange} placeholder="Insira o nome ou número do Pokémon" />
        </label>
        <label>
          <input className="" type="submit" value="Pesquisar" />
        </label>
      </form>
      </div>
      {pokemonData.map((data) => {
        return (
          <div className="container">

            <img src={data.sprites["front_default"]} />
            <img src={data.sprites["front_shiny"]} />

            <p>Teste de fonte</p>
            <div className="divTable">
              <div className="divTableBody"></div>
              <div className="divTableRow">
                <div className="divTableCell">Nome</div>
                <div className="divTableCell">{" "}{data.name.capitalize()}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Tipo</div>
                <div className="divTableCell">{pokemonType.capitalize()}</div>
              </div>
              {/* <div className="divTableRow">
                <div className="divTableCell">Tipo 2</div>
                <div className="divTableCell">{pokemonType2.capitalize()}</div>
              </div> */}
              <div className="divTableRow">
                <div className="divTableCell">Altura</div>
                <div className="divTableCell">{" "}{(data.height / 10)} m</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Peso</div>
                <div className="divTableCell">{" "}{(data.weight / 10)} Kg</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">ID na Pokédex</div>
                <div className="divTableCell">{" "}{data.id}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Vida</div>
                <div className="divTableCell">{" "}{data.stats[0].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Ataque</div>
                <div className="divTableCell">{" "}{data.stats[1].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Defesa</div>
                <div className="divTableCell">{" "}{data.stats[2].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Ataque Especial</div>
                <div className="divTableCell">{" "}{data.stats[3].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Defesa Especial</div>
                <div className="divTableCell">{" "}{data.stats[4].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Velocidade</div>
                <div className="divTableCell">{" "}{data.stats[5].base_stat}</div>
              </div>

              {/* <div className="divTableRow">
                <div className="divTableCell">Number of Battle</div>
                <div className="divTableCell">{data.game_indices.length}</div>
              </div> */}


            </div>

          </div>
        )
      })}
    </div>
  );
}

export default App;