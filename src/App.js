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

      <div id="home" className="formulario">
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

            <div className="containerSprite">
            <img className="imgSprite" src={data.sprites["front_default"]} />
            <img className="imgSprite" src={data.sprites["front_shiny"]} />
            </div>

            <div className="divTable">
              <div className="divTableBody"></div>
             
              <div className="divTableRow">
                <div className="divTableCell"><strong>Nome:</strong> {" "}{data.name.capitalize()}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>Tipo:</strong> {pokemonType.capitalize()}</div>
              </div>
              <div className="divTableRow">

              <div className="divTableCell"><strong>Tipo 2:</strong> </div>
                {pokemonType2 && (
                  <div className="divTableCell  tipo2">{pokemonType2.capitalize()}</div>
                )}
              </div>

              <div className="divTableRow">
                <div className="divTableCell"><strong>Altura:</strong> {" "}{(data.height / 10)} m</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>Peso:</strong> {" "}{(data.weight / 10)} Kg</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>ID na Pokédex:</strong> {" "}{data.id}</div>
              </div>

              
              <div className="divTableRow">
                <div className="divTableCell"><strong>Vida:</strong> {" "}{data.stats[0].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>Ataque:</strong> {" "}{data.stats[1].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>Defesa:</strong> {" "}{data.stats[2].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>Ataque Especial:</strong> {" "}{data.stats[3].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>Defesa Especial:</strong> {" "}{data.stats[4].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><strong>Velocidade:</strong> {" "}{data.stats[5].base_stat}</div>
              </div>

            </div>

          </div>
        )
      })}

      <div className="spacer"></div>

      <div className="textos" id="sobre">
        <h1>Sobre</h1>
        <p>Tem alguma dúvida sobre algum Pokémon? Gostaria de descubrir quais são os status daquele Pokémon? Procure o
            nome ou número do Pokémon no Listmon e descubra.</p>
        <p>Este site foi feito para treinar o consumo de dados de APIs com ReactJs. É possível acessar o Pokeapi pelo
            link: <a href="https://pokeapi.co/" class="link-texto" target="_blank" rel="noreferrer">https://pokeapi.co/</a></p>
      </div>

      <div className="textos" id="contato">
        <h1>Contato</h1>
        <p>Linkedin: <a class="link-texto" href="https://www.linkedin.com/in/maurometz" target="_blank" rel="noreferrer">linkedin.com/in/maurometz/</a> <br></br> 
        Github: <a class="link-texto" href="https://github.com/maurometz" target="_blank" rel="noreferrer">github.com/maurometz</a> <br></br> 
        Email:<br></br> maurometzoficial@gmail.com </p>
      </div>
      <footer>
        <div class="footer">
          <p>Criado por Mauro Metz</p>
        </div>
      </footer>
    </div>
  );
}

export default App;