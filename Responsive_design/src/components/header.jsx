import React from "react";
import Logo from '../assets/img/logo.svg'
import '../styles/Header.css'

const Header = () => {
    return(
        <>
            <header>
                <img src={Logo} alt="" />
                <div className="header--title-container">
                    <h1>La Próxima revolución en el intercambio de cryptomonedas</h1>
                    <p>Batatabit ayuda a navegar entre los diferentes precios y tendencias</p>
                    <a href="#planes" className="header--button">Conoce nuestros planes <span></span></a>
                </div>
            </header>
        </>
    )
}

export default Header