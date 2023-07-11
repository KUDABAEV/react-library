import React from "react";
import {Title} from "../Title";
import {MainSlider} from "../MainSlider";
import './sale.scss';


export const Sale = () => {
    return (
        <div className='sale'>
            <Title title='Распродажа'/>
            <MainSlider />
        </div>
    )
}