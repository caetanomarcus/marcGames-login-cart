import React, {useState} from 'react';
import * as S from './styleds'



export default function Header(){
    const [menu] = useState(['Home', 'Jogos Novos', 'Jogos Velhos', 'Sobre'])

    return(
        <S.Container>
            <S.SecondContainer>
                <S.Title>MarcGames</S.Title>
            </S.SecondContainer>
            <S.ThirdContainer>
                <S.Menu>
                    {menu.map(item => 
                        <S.ItemsMenu>{item}</S.ItemsMenu>
                    )}
                </S.Menu>
            </S.ThirdContainer>
        </S.Container>
    )
}