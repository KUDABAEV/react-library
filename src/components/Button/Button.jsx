import React from "react";
import './button.scss';


export const Button = ({children}) => {
    return (
        <button className='button'>
            {children}
        </button>
    )
}


