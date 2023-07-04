import React from "react";
import {Title} from "../Title";
import './social.scss';



export const Social = () => {

    return (
        <div className='social'>
            <div className="container">
                <div className="social__content">
                    <Title title='Следите за нами в социальных сетях'/>
                    <ul className='social__content-items'>
                        <li className='social__content-item'>
                            <a className='social__content-link' href="#">
                                <img className="social__content-img" src="/img/facebook.svg" alt="facebook"/>
                            </a>
                        </li>
                        <li className='social__content-item'>
                            <a className='social__content-link' href="#">
                                <img className="social__content-img" src="/img/telegram.svg" alt="telegram"/>
                            </a>
                        </li>
                        <li className='social__content-item'>
                            <a className='social__content-link' href="#">
                                <img className="social__content-img" src="/img/twitter.svg" alt="twitter"/>
                            </a>
                        </li>
                        <li className='social__content-item'>
                            <a className='social__content-link' href="#">
                                <img className="social__content-img" src="/img/vk.svg" alt="vk"/>
                            </a>
                        </li>
                        <li className='social__content-item'>
                            <a className='social__content-link' href="#">
                                <img className="social__content-img" src="/img/instagram.svg" alt="instagram"/>
                            </a>
                        </li>
                        <li className='social__content-item'>
                            <a className='social__content-link' href="#">
                                <img className="social__content-img" src="/img/youtube.svg" alt="youtube"/>
                            </a>
                        </li>
                        <li className='social__content-item'>
                            <a className='social__content-link' href="#">
                                <img className="social__content-img" src="/img/instagram-alt.svg" alt="instagram"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}