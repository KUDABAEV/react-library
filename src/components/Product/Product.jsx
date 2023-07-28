import React from "react";
import './product.scss';



export const Product = () => {


    return (
        <section className="product">
            <div className="product__img">
                <img src="/img/cart1.jpg" alt=""/>
            </div>
            <div className="product__title">
                Порядок в хаосе
            </div>
            <div className="product__count">
                <div className="count">
                    <div className="count__box">
                        1
                    </div>
                    <div className="count__controls">
                        <button className='count__up'>
                            <img src="/img/up.svg" alt="Up" />
                        </button>
                        <button className='count__down'>
                            <img src="/img/down.svg" alt="Down" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product__price">
                300 руб.
            </div>
            <div className="product__controls">
                <button>
                    <img src="/img/delete.svg" alt="Delete"/>
                </button>
            </div>
        </section>
    )
}