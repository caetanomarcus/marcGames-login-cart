import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const MainContainer = styled.div`
  margin-inline: auto;

  .divContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .labelContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.3rem;
      border: solid #000101 1px;
      border-radius: 0.25rem;
      width: 330px;

      label {
        font-size: 1.5rem;
        padding: 0.5rem;
        background-color: #000101;
        color: #fff;
        width: 25%;
      }

      input {
        border-style: none;
        outline: none;
        width: 75%;
        font-size: 1.5rem;

        &::placeholder{
            color: red;
        }
      }
    }

    .btnContainer {
      display: flex;
      justify-content: center;
      width: 150px;
      margin: 1rem;

      button {
        width: 100%;
        height: 35px;
        outline: none;
        border-style: none;
        border-radius: 0.25rem;
        background-color: #000101;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default function Login() {
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [erro, setErro] = useState(false);
  const history  = useHistory();

  const handleChangeName = (e) => {
    setNome(e.target.value);
  };

  const handleChangeCep = (e) => {
    setCep(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        const adress = {
          logradouro: res.data.logradouro,
          bairro: res.data.bairro,
          cidade: res.data.localidade,
          estado: res.data.uf
      }

        let data = {
          nome,
          cep,
          adress,
        };
        localStorage.setItem("userData", JSON.stringify(data));
        setErro(false);
        history.push('/products')
        
      })
      .catch((err) => {
        console.log(err)
        setErro(true);
      });

     

     
  };

  return (
    <>
      <Header>
        <h1>MarcGames | Bem-vinde</h1>
      </Header>
      <Container>
        <MainContainer>
          <form onSubmit={handleSubmit} className="divContainer">
            <div className="labelContainer">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" onChange={handleChangeName}></input>
            </div>
            <div className="labelContainer">
              <label htmlFor="cep">Cep</label>
              <input
                id="cep"
                onChange={handleChangeCep}
                placeholder={erro ? "Cep não encontrado" : ""}
                value={erro ? "" : cep}
                onFocus={() => {
                    setErro(false)
                    setCep('')
                }}
              ></input>
            </div>
            <div className="btnContainer">
              <button type="submit">Entrar</button>
            </div>
          </form>
        </MainContainer>
      </Container>
    </>
  );
}
