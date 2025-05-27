import React from 'react';
import { HeaderMemeGenerator } from '../Header/index.jsx';
import { MainMemeGenerator } from '../Main/index.jsx';

export function MemeGeneratorApp() {
    return(
    <>
    <HeaderMemeGenerator/>
    <MainMemeGenerator/>
    </>
    )
}