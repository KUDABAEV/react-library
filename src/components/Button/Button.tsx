import React from "react";
import classNames from "classnames";
import './button.scss';

type ButtonProps = {
    onClick: any;
    type: string;
    children:any;
}

export const Button:React.FC<ButtonProps> = ({onClick, type, children}) => {

    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
    })

    return (
        <button
            className={btnClass}
            onClick={onClick}
        >
            {children}
        </button>
    )
}


