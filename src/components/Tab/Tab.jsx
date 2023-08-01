import React from 'react';
import {useSelector} from "react-redux";
import './tab.scss';

export const Tab = ({title, handler, id}) => {
    const categoryId = useSelector(state => state.category.categoryId);

    return (
        <button className={id === categoryId ? 'tab tab_active' : "tab"}
            onClick={handler}
        >
            {title}
        </button>
    );
}

