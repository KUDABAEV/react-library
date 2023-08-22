import React from "react";
import {Title} from "../Title";
import './social.scss';


export const Social = () => {

    const arrSocial = [
        {src: '/img/facebook.svg', alt: 'facebook'},
        {src: '/img/telegram.svg', alt: 'telegram'},
        {src: '/img/twitter.svg', alt: 'twitter'},
        {src: '/img/vk.svg', alt: 'vk'},
        {src: '/img/instagram.svg', alt: 'instagram'},
        {src: '/img/youtube.svg', alt: 'youtube'},
        {src: '/img/instagram-alt.svg', alt: 'instagram'},
    ]

    return (
        <div className='social'>
            <div className="container">
                <div className="social__content">
                    <Title title='Следите за нами в социальных сетях'/>
                    <ul className='social__content-items'>
                        {
                            arrSocial.map((item,index) => (
                                <li key={index} className='social__content-item'>
                                    <a className='social__content-link' href="#">
                                        <img className="social__content-img" src={item.src} alt={item.alt}/>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}