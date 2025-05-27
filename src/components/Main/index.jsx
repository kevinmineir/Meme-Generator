import React from 'react';
import * as S from "./styles.js"

export function MainMemeGenerator() {
    return (
        <>
        <S.Inputs>
            <S.Form action="">
                <S.Text>Texto Em Cima</S.Text>       
                <S.Input type="text" placeholder="YO MOMMA SO FAT" />       
            </S.Form>

            <S.Form action="">
                <S.Text>Texto Em Baixo</S.Text>
                <S.Input type="text" placeholder="DORA CAN'T EXPLORE HER" />
            </S.Form>
        </S.Inputs>

        <S.Div>
           <S.Button>Conseguir Nova Imagem Meme</S.Button>
           <S.Img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/1767185/original/yo_mama_joke_lmao_how_many_loves_for_spongbob-155531_(1)/send-you-a-list-of-50-really-funny-yo-mama-jokes.jpg" alt="Meme Img" />
        </S.Div>
        </>
    )
}