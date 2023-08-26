import React from "react";
import './floating-window.scss';

type FloatingWindowProps = {
    children: any;
}

export const FloatingWindow:React.FC<FloatingWindowProps> = ({children}) => {

    return (
        <div className='floating-window'>
            {children}
        </div>
    )
}