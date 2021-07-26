import React, { useState} from "react";
import Games from "./Games.js";
import styled from "styled-components";
import {connect} from 'react-redux'
import { addID } from "../reduxConfig/actions/index.js";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15vw;
  width: 70vw;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 25vw;
  border-bottom: 1px black solid;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 18vh;
  }
  img {
    width: 90%;
  }

  button{
      background-color: orange;
      border-style: none;
      outline: none;
      height: 2.5rem;
      width: 10vw;
      border-radius: .3rem;
      border: solid 1px #000101;
      cursor: pointer;

      &:active{
          transform: scale(.9);
      }
  }
`;

const Title = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  font-size: 0.9rem;
`;

const Price = styled.p`
  margin: 0.5rem;
  text-shadow: 0 0 3px #fc8c14;
`;


function mapDispatchToProps (dispatch){
  return {
    addID: (id) => dispatch(addID(id))
  }
}

 function MainConnected() {
  const [games] = useState(Games);
  const [count, setCount]= useState(0)


  
  

  const handleClick = (game, e, props) => {
    e.preventDefault();
    setCount(count + 1)
    addID(game.id)
    

    const data = game.id;
    console.log(game.id)

    let sendData = []

    if(!localStorage.getItem('gameData')){
        localStorage.setItem('gameData', JSON.stringify([data]))
    } else {
        sendData = JSON.parse(localStorage.getItem('gameData')) || []
        sendData.push(data)
        localStorage.setItem('gameData', JSON.stringify(sendData))
       
    }
    
   
}
  return (
    <Container>
      {games.map((game) => {
        return (
          <Card>
            <img src={game.cover} alt={"Capa do jogo " + game.name} />
            <div>
              <Title>{game.name}</Title>
              <OldPrice>{game.oldPrice}</OldPrice>
              <Price>{game.price}</Price>
            </div>
            <button onClick={(e) => handleClick(game,e)} >Comprar</button>
          </Card>
        );
      })}
    </Container>
  );
}

const Main = connect(null, mapDispatchToProps)(MainConnected)

export default Main