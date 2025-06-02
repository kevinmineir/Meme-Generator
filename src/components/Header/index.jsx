import React from 'react';
import * as S from './styles.js'

export function HeaderMemeGenerator() {
    
    return (
        <>
        <S.Header className="header">
            <S.Img src="https://i.imgflip.com/3sa0a7.png" className="Troll Face" />
            <S.Text className="header-title">Gerador De Memes</S.Text>
        </S.Header>
        </>
    )
}