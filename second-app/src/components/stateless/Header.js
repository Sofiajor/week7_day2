import React from 'react'
import logo from '../../logo.svg'
import Title from './Title'
import Desc from './Description'

const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title text="Esto es React!" type="titulo-principal" />
            <Desc text="Segunda app" />
        </header>
    )
}

export default Header