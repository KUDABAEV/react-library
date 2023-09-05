import React from "react";
import {Title} from "../Title";
import {MainSlider} from "../MainSlider";
import './sale.scss';

type SaleProps = {
    books:any;
}

export const Sale:React.FC<SaleProps> = ({books}) => {
    return (
        <div className='sale' id='sale'>
            <Title title='Распродажа'/>
            <MainSlider books={books}/>
        </div>
    )
}