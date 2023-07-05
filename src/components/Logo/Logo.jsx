import React from "react";
import './logo.scss';


export const Logo = () => {

    return (
        <div className="logo">
            <svg className="logo-svg" viewBox="0 0 199 44" role="img" aria-label="Логотип">
                <use href="./img/sprite.svg#logo"/>
            </svg>

        </div>
    )
}