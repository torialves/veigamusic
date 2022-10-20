import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/card";

function App() {
  const baseUrl = "http://localhost:3001";

  const [values, setValues] = useState();
  const [musics, setMusics] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.nome]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post(`${baseUrl}/`, {
      nome: values.nome,
      cantor: values.cantor,
      categoria: values.categoria,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get(`${baseUrl}/getMusic`).then((response) => {
      setMusics(response.data);
    });
  });

  return (
    <div class="App">
      <div class="container">
        <h1 class="title">VeigaMusic</h1>
        <h3>Adicionar músicas</h3>
        <div class="register-box">
          <input
            class="register-input"
            type="text"
            nome="nome"
            placeholder="Nome da Musica"
            onChange={handleChangeValues}
          />
          <input
            class="register-input"
            type="text"
            nome="cantor"
            placeholder="Cantor"
            onChange={handleChangeValues}
          />
          <input
            class="register-input"
            type="text"
            nome="categoria"
            placeholder="Categoria"
            onChange={handleChangeValues}
          />
          <input
            class="register-input"
            type="text"
            nome="dataLancamento"
            placeholder="Data de Lancamento"
            onChange={handleChangeValues}
          />
          <button class="register-button" onClick={handleClickButton}>
            Salvar
          </button>
        </div>
        <br />
        <div classnome="cards">
          {typeof musics !== "undefined" &&
            musics.map((music) => {
              return (
                <Card
                  key={music.idmusics}
                  id={music.idmusics}
                  nome={music.nome}
                  cantor={music.cantor}
                  categoria={music.categoria}
                  dataLancamento={music.dataLancamento}
                ></Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
