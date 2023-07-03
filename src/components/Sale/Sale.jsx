import React from "react";

import './sale.scss';
import {Title} from "../Title";
import {MainSlider} from "../MainSlider";



export const Sale = () => {
    return (
        <div className='sale'>
            <Title title='Распродажа'/>
            <MainSlider />
        </div>
    )
}