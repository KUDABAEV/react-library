import React from 'react';
import { Title } from "../Title";
import { MainSlider } from "../MainSlider";
import './receipts.scss';



export const Receipts = () => {
    return (
        <div className='receipts'>
            <div className="container">
                <div className="receipts__content">

                    <div className="receipts__content-top">
                        <Title title='Горячие поступления' />

                        <nav className='nav-receipts'>

                            <ul className='menu-receipts'>

                                <li className='menu-receipts__item'>
                                    <a className='menu-receipts__item-link' href="#">Фантастика</a>
                                </li>
                                <li className='menu-receipts__item'>
                                    <a className='menu-receipts__item-link' href="#">Саморазвитие</a>
                                </li>
                                <li className='menu-receipts__item'>
                                    <a className='menu-receipts__item-link' href="#">Детективы</a>
                                </li>
                                <li className='menu-receipts__item'>
                                    <a className='menu-receipts__item-link' href="#">Детские</a>
                                </li>
                                <li className='menu-receipts__item'>
                                    <a className='menu-receipts__item-link' href="#">Другое</a>
                                </li>

                            </ul>

                        </nav>
                    </div>
                </div>
            </div>

            <MainSlider />
        </div>
    )
}

