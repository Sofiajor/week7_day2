import React from 'react'
import logo from '../../logo.svg'
import Title from './Title'
import Desc from './Description'

const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title text="Esto es React!" type="titulo-principal" />
            <Desc text="Vamos a liarla parda yay!" />
            <small>Recuerda: las imágenes se importan como URL: {logo}</small>
        </header>
    )
}

export default Header