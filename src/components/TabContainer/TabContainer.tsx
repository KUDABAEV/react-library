import React from 'react';
import './tab-container.scss';

type childrenProps = {
    children: any
}

export const TabContainer:React.FC<childrenProps> = ({children}) => {
    return (
        <div className='tab-container'>
            {children}
        </div>
    );
}

