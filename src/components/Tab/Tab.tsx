import React from 'react';
import {useSelector} from "react-redux";
import {selectCategoryId} from "../../redux/slices/categorySlice";
import './tab.scss';

type TabProps = {
    title: string,
    handler: () => void,
    id: number;
}

export const Tab:React.FC<TabProps> = ({title, handler, id}) => {
    const categoryId = useSelector(selectCategoryId);

    return (
        <button className={id === categoryId ? 'tab tab_active' : "tab"}
            onClick={handler}
        >
            {title}
        </button>
    );
}

