import React from 'react';
import './tab-container.scss';

export function TabContainer({children}) {
    return (
        <div className='tab-container'>
            {children}
        </div>
    );
}

