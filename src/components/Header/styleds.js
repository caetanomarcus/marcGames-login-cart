import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    min-height: 150px;
    background-color: #000;
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
   
    
`
export const SecondContainer = styled.div `
    width: 90%;
    max-width: 1366px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    

    @media(max-width: 414px){
        flex-direction: column;
        font-size: .8rem;
        justify-content: center;
    }
 
    
`
export const Label = styled.label `
    background: #fff;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
`

export const ThirdContainer = styled.div `
    max-width: 1366px;
    display: flex;
    align-items: center;
    height: 50%;
`

export const Title = styled.h1 `
    color: #fff;
    cursor: pointer;

    
    
`
export const Searcher = styled.input `
    background: #fff;
    width: 40vw;
    max-width: 750px;
    height: 6vh;
    border-style: none;
    border-radius: 0.25rem;
    font-size: 1.8rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow:none;
    }

    @media(max-width: 414px){
        font-size: 1rem;
    }
`

export const LoginContainer = styled.div `
    width: 6.4rem; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const HeaderIMG = styled.img `
    width: ${props => props.largura};
    cursor: pointer;
    margin-right: 1rem;

    @media(max-width: 414px){
        width: ${props => props.cel}
    }
    
`

export const TitleParagraph = styled.p `
    color: #fff;
    cursor: pointer;
    
`
export const Menu = styled.ul `
    list-style: none;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80vw;

    @media(max-width: 414px){
        width: 90vw;
        justify-content: space-between;
    }
    
`
export const ItemsMenu = styled.li `
    color: #fff;
   

    &:hover {
        color: #fc8c14;
        cursor: pointer;
    }
`
