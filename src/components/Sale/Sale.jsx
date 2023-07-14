import React from "react";
import {Title} from "../Title";
import {MainSlider} from "../MainSlider";
import './sale.scss';


export const Sale = ({books, isLoading}) => {
    return (
        <div className='sale'>
            <Title title='Распродажа'/>
            <MainSlider books={books} isLoading={isLoading}/>
        </div>
    )
}