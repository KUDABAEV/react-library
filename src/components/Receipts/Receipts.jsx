import React from 'react';
import { Title } from "../Title";
import { MainSlider } from "../MainSlider";
import './receipts.scss';

export const Receipts = ({books, isLoading, categoryId, changeCategoryId}) => {


    const menuBooks = ['Фантастика', 'Саморазвитие', 'Детективы', 'Детские', 'Аудиокниги', 'Другое'];

    return (
        <div className='receipts'>
            <div className="container">
                <div className="receipts__content">

                    <div className="receipts__content-top">
                        <Title title='Горячие поступления' />

                        <nav className='nav-receipts'>

                            <ul className='menu-receipts'>

                                {
                                    menuBooks.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => changeCategoryId(index)}
                                            className={categoryId === index ? 'active' : ''}
                                        >{item}</li>
                                    ))
                                }
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>

            <MainSlider books={books} isLoading={isLoading}/>
        </div>
    )
}

