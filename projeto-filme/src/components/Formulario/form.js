import React, { useState } from "react";
import Bttn from "../Bttn/bttn";
import "../Formulario/form.css";

const Formulario = ({ filmes, setFilmes, label1, label2, label3, label4 }) => {
  const [nomeFilme, setNome] = useState("");
  const [lancamentoFilme, setLancamento] = useState("");
  const [url, setUrl] = useState("");
  const [trailerFilme, setTrailer] = useState("");
  const [editando, setEditando] = useState(false);

  const handleChangeName = (e) => {
    setNome(e.target.value);
  };

  const handleChangeLancamento = (e) => {
    setLancamento(e.target.value);
  };

  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleChangeTrailer = (e) => {
    setTrailer(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const ultimoFilme = filmes[filmes.length - 1];
    setFilmes([
      ...filmes,
      {
        id: ultimoFilme.id + 1,
        nome: nomeFilme,
        lancamento: lancamentoFilme,
        imagem: url,
        trailer: trailerFilme,
      },
    ]);
  };

  return (
    <div className="container-form">
      <div className="div_container-form">
        <form onSubmit={HandleSubmit}>
        
              <div className="form-div-space">
                <h1>Cadastre um filme</h1>
                <label>{label1} </label>
                <input
                  value={nomeFilme}
                  onChange={handleChangeName}
                  required
                ></input>
                <div/>
                  
                  <div className="form-div-space"></div>
                  <label>{label2} </label>
                  <input
                    value={lancamentoFilme}
                    onChange={handleChangeLancamento}
                    required
                  ></input>
                
                <div />
                <div className="form-div-space"></div>
                  <label>{label3} </label>
                  <input value={url} onChange={handleChangeUrl} required></input>
                  <br></br>
                <div />
                <div className="form-div-space"></div>
                  <label>{label4} </label>
                  <input
                    value={trailerFilme}
                    onChange={handleChangeTrailer}
                    required
                  ></input>
                </div>
                  
              
          <Bttn texto="Enviar" type="submit" classname="bttn" />
        </form>
      </div>
    </div>
  );
};

export default Formulario;
