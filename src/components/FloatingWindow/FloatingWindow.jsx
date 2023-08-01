import React from "react";
import './floating-window.scss';


export const FloatingWindow = ({children}) => {

    return (
        <div className='floating-window'>
            {children}
        </div>
    )
}