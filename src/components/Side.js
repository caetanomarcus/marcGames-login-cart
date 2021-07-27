import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect, useStore } from "react-redux";
import { cleanID} from "../reduxConfig/actions";

const Container = styled.div`
  height: 76vh;
  width: 30vw;
  margin-top: 11.5vw;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0;

  .titleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .displayGames {
    display: flex;
    flex-direction: column;
    width: 100%;

    .card {
      display: flex;
      align-items: center;

      .cardNumber {
        text-decoration: underline;
        padding: 1rem;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return { id: state.id };
};

function SideConnected(props) {
  const [ids, setIds] = useState([...new Set(props.id)]);
  const [update, setUpdate] = useState(0);
  const [total, setTotal] = useState(ids.map((item) => item.price));
  const reset = useStore()

  useEffect(() => {
    // ;
    setTotal(ids.map((item) => item.price));
  }, [ids]);

  useEffect(() => {
    setIds([...new Set(props.id)]);
  }, [props.id]);

  const handleAdd = (item) => {
    let operation = item.price + item.initialPrice;
    item.price = operation;
    item.quantity = item.quantity + 1;
    setUpdate(update + 1);
    setTotal([...total, item.initialPrice]);
  };

  const handleRemove = (item) => {
    let newGames = []
    if (item.quantity > 1) {
      let operation = item.price - item.initialPrice;
      item.price = operation;
      item.quantity = item.quantity - 1;
      setUpdate(update - 1);
      setTotal([...total, -item.initialPrice]);
    }
    if (item.quantity === 1) {
       newGames = ids.filter((game) => {
        return item.id !== game.id;
      }) || [];
      setIds(newGames);

      if (newGames.length === 0) {
        reset.dispatch(cleanID([]))
      }
    }
    
  };

  return (
    <Container>
      <h2>Bem vind@, {props.user?.nome}</h2>
      <div className="titleContainer">
        <h4>Sua entrega será para:</h4>
        <h4>
          {props.user?.adress?.logradouro}, Bairro {props.user?.adress?.bairro},{" "}
          {props.user?.adress?.cidade}, {props.user?.adress?.estado}
        </h4>
      </div>
      <div className="displayGames">
        {ids.map((game) => {
          return (
            <>
              <div className="card">
                <button onClick={() => handleRemove(game)}>-</button>
                <img
                  src={game.cover}
                  style={{ width: "45px" }}
                  alt={game.name}
                />
                <button onClick={() => handleAdd(game)}>+</button>
                <p className="cardNumber">
                  {game.name} x {game.quantity}
                </p>
                <p>R$ {game.price.toFixed(2).toString().replace(".", ",")}</p>
              </div>
            </>
          );
        })}

        {total.length > 0 ? (
          <p>
            Total: R${" "}
            {total
              .reduce((acumulator, currentValue) => acumulator + currentValue)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          </p>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

const Side = connect(mapStateToProps)(SideConnected);

export default Side;
