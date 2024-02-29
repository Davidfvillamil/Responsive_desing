import React from "react";
import '../styles/Main.css'

const Main = () => {
    return(
        <>
            <main>
                <section className="main-exchange-container">
                    <div className="background-img"></div>
                    <div className="main-exchange-container--title">
                        <h2>Visibilizamos todas las tasas de cambio</h2>
                        <p> Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo </p>
                    </div>
                    <section className="main-tables-container">
                        <div className="main-currency-table">
                            <p className="currency-table--title">Monedas</p>
                            <div className="currency-table--container"> 
                                <table>
                                    <tr>
                                        <td className="table__top-left">Bitcoin</td>
                                        <td className="table__top-right table__right">$ 1.96 <span className="down"></span></td>
                                    </tr>
                                    <tr>
                                        <td>Etherium</td>
                                        <td className="table__right">$ 0.07 <span className="up"></span></td>
                                    </tr>
                                    <tr>
                                        <td>Riple</td>
                                        <td className="table__right">$ 2.17 <span className="down"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="table__bottom-left">Stellar</td>
                                        <td className="table__bottom-right table__right"> $ 4.96 <span className="down"></span></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="currency-table--date">
                                <p><b>Actualizado:</b> 19 de Julio 23:45</p>
                            </div>
                        </div>
                        <div className="main-exchange-container--title">
                            <h2>Visibilizamos todas las tasas de cambio</h2>
                            <p> Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo </p>
                        </div>
                        <div className="main-comision-table">
                            <p className="comision-table--title">Comisiones</p>
                            <div className="comision-table--container">
                                <table>
                                    <tr>
                                        <td className="table__top-left">Bitrade</td>
                                        <td className="table__top-right table__right">$ 12.96</td>
                                    </tr>
                                    <tr>
                                        <td>Bitpreco</td>
                                        <td className="table__right">$ 13.07</td>
                                    </tr>
                                    <tr>
                                        <td>Novadax</td>
                                        <td className="table__right">$ 13.15</td>
                                    </tr>
                                    <tr>
                                        <td className="table__bottom-left">Coinnext</td>
                                        <td className="table__bottom-right table__right">$ 14.96</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="currency-table--date">
                                <p><b>Actualizado:</b> 19 de Julio 23:45</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="main-product-detail"> 
                    <span className="product-detail--batata-logo"></span>
                    <div className="product-detail--title">
                        <h2>Creamos un producto sin comparación</h2>
                        <p>Confiable y diseñado para su uso diario</p>
                    </div>
                    <section className="product-carts--container">
                        <article className="product-detail--cart">
                            <span className="clock"></span>
                            <p className="product--cart-title">Tiempo real</p>
                            <p className="product--cart-body">Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamietno</p>
                        </article>
                        <article className="product-detail--cart">
                            <span className="look"></span>
                            <p className="product--cart-title">No hay tasas escondidas</p>
                            <p className="product--cart-body">Ni en la compra o al momento de exit, Babit siempre te muestra el costo real de lo que estas adquiriendo</p>
                        </article>
                        <article className="product-detail--cart">
                            <span className="dolar"></span>
                            <p className="product--cart-title">Compara monedas</p>
                            <p className="product--cart-body">no más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual</p>
                        </article>
                        <article className="product-detail--cart">
                            <span className="confianza"></span>
                            <p className="product--cart-title">Información confiable</p>
                            <p className="product--cart-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan</p>
                        </article>
                    </section>
                </section>
                <section> Sección 3</section>
                <section> Sección 4</section>
            </main>
        </>
    )
}

export default Main