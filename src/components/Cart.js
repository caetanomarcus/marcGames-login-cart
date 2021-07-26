import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Header from './Header'
import Main from './Main';
import Side from './Side';

const Container = styled.div `
    display: flex;
    justify-content: space-between;

`

export default function Cart (){
    const history = useHistory();
    const [user, setUser] = useState({});

    
    
    useEffect(() => {
        let data = localStorage.getItem("userData");
        if(data !== null){
            data = JSON.parse(data);
            setUser(data);
            localStorage.clear('userData')
        } else {
            history.push('/')
        }
       
    },[])

    

    return (
        <>
       <Header />
       <Container>
       <Main />
       <Side user={user} />
       </Container>
       </>
    )
}