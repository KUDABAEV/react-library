import React from "react";

import './about-item.scss';

export const AboutItem = ({count, description}) => {

    return (
        <div className='about__item'>
            <h2 className="about__item-count">
                {count}
            </h2>
            <p className="about__item-description">
                {description}
            </p>
        </div>
    )
}