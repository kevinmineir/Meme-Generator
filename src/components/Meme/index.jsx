import * as S from "./styles.js"

export function Meme(props) {
    return (
       <S.ContainerImg MemeImg={props.MemeImg}>
            <S.TopText>{props.TopText}</S.TopText>
            <S.BottomText>{props.BottomText}</S.BottomText>
       </S.ContainerImg>
    )
}