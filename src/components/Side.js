import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container = styled.div `
    height: 76vh;
    width: 30vw;
    margin-top: 11.5vw;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    right: 0;
    background-color: #eee;
`

const mapStateToProps = state => {
    return {id: state.id}
}


function SideConnected(props){


 


    return(
        <Container>
            <h2>Bem vind@, {props.user.nome}</h2>
            <h2>Sua entrega será para:</h2>
            <h2>{props.user.adress?.logradouro}, Bairro {props.user.adress?.bairro}, {props.user.adress?.cidade}, {props.user.adress?.estado}</h2>
           
        </Container>
    )
}

const Side = connect(mapStateToProps)(SideConnected)

export default Side;
