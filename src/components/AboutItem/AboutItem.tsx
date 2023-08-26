import React from "react";
import './about-item.scss';

type AboutItemProps = {
    count: number;
    description: string;
}

export const AboutItem:React.FC<AboutItemProps> = ({count, description}) => {

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