import React from 'react';
import * as S from "./styles.js"
import {Meme} from '../Meme'

export function MainMemeGenerator() {
    const [TopText, SetTopText] = React.useState("YO MOMMA SO FAT")
    const [BottomText, SetBottomText] = React.useState("DORA CAN'T EXPLORE HER")
    const [MemeImg, SetMemeImg] = React.useState("https://pbs.twimg.com/profile_images/1919821909673320449/8ENFUF8t_400x400.jpg")

    const [MemeInfo, SetMemeInfo] = React.useState({
        TopText: TopText,
        BottomText: BottomText,
        MemeImg: MemeImg
    })
    

    function MudarMemeInfo() {
        SetMemeInfo({
           ...MemeInfo,
           TopText: TopText,
           BottomText: BottomText,
           MemeImg: MemeImg
        })
    }
    return (
        <>
        <S.Inputs>
            <S.Form>
                <S.Text>Texto Em Cima</S.Text>       
                <S.Input
                  onChange={(e) => SetTopText(e.target.value)}
                  name="TopText"
                  type="text" 
                  placeholder="YO MOMMA SO FAT" />       
            </S.Form>

            <S.Form onKeyDown={() => MudarMemeInfo('Bottom')} name='BottomForm'>
                <S.Text>Texto Em Baixo</S.Text>
                <S.Input 
                name='BottomText' 
                type="text" 
                placeholder="DORA CAN'T EXPLORE HER" 
                onChange={(e) => SetBottomText(e.target.value)}
                />
            </S.Form>
        </S.Inputs>

        <S.Div>
           <S.Button onClick={() => SetMemeImg()}>Conseguir Nova Imagem Meme</S.Button>
        </S.Div>
        
        <Meme MemeImg={MemeInfo.MemeImg} TopText={MemeInfo.TopText} BottomText={MemeInfo.BottomText}/>
        </>
    )
}