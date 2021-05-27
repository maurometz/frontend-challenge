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
  const [pokemonType2, setPokemonType2] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      if (!!res.data.types[1]) {
        setPokemonType2(res.data.types[1].type.name)
      } else {
        setPokemonType2(undefined)
      }
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
      <section className="section-menu">
        <div className="menu-content">
          <nav className="nav-menu">
            <a className="a-imagem" href="#"><img className="imagem-link" src="https://i.ibb.co/yQmt4xW/logo.png" /></a>
            <ul className="ul-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </section>
      <div  id="home" className="formulario">
        <form className="pesquisa" onSubmit={handleSubmit}>
          <label>
            <input className="escrever-pesquisa" type="text" onChange={handleChange} placeholder="Insira o nome ou número do Pokémon" />
          </label>
          <label>
            <input className="botao-pesquisar" type="submit" value="Pesquisar" />
          </label>
        </form>
      </div>
      {pokemonData.map((data) => {
        return (
          <div className="container">

            <img src={data.sprites["front_default"]} />
            <img src={data.sprites["front_shiny"]} />
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
              <div className="divTableRow">
                <div className="divTableCell">Tipo 2</div>
                {pokemonType2 && (
                  <div className="divTableCell">{pokemonType2.capitalize()}</div>
                )}
              </div>
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

            </div>

          </div>
        )
      })}

      <div id="sobre">
        <h1>Sobre</h1>
        <p>Tem alguma dúvida sobre algum Pokémon? Gostaria de descubrir quais são os status daquele Pokémon? Procure o
            nome ou número do Pokémon no Listmon e descubra.</p>
        <p>Este site foi feito para treinar o consumo de dados de APIs com ReactJs. É possível acessar o Pokeapi pelo
            link: <a href="https://pokeapi.co/" class="pokeapi" target="_blank" rel="noreferrer">https://pokeapi.co/</a></p>
      </div>

      <div id="contato">
        <h1>Contato</h1>
        <p>Linkedin: linkedin.com/in/maurometz/</p>
        <p>Github: github.com/maurometz </p>
        <p>Email: maurometzoficial@gmail.com </p>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;