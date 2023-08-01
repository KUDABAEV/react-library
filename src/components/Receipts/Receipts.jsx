import React from 'react';
import {Title} from "../Title";
import {MainSlider} from "../MainSlider";
import {Tab} from "../Tab";
import {TabContainer} from "../TabContainer";
import {FloatingWindow} from "../FloatingWindow";
import {useDispatch, useSelector} from "react-redux";
import {setCategories} from "../../redux/slices/categorySlice";
import axios from "axios";
import './receipts.scss';

export const Receipts = ({books, isLoading, changeCategoryId}) => {

    const {categories} = useSelector(state => state.category);
    const dispatch = useDispatch();

    const [openCategories, setOpenCategories] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://library-name.onrender.com/category')
            .then(response => {
                dispatch(setCategories(response.data))
            })
    }, [])
    return (
        <div className='receipts'>
            <div className="container">
                <div className="receipts__content">

                    <div className="receipts__content-top">
                        <Title title='Горячие поступления'/>

                        <TabContainer>
                            {
                                categories.map(item =>
                                    <Tab
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        handler={() => changeCategoryId(item.id)}
                                    />)
                            }
                            <Tab
                                key='Категории'
                                title='Категории'
                                handler={() => setOpenCategories(!openCategories)}
                            />
                        </TabContainer>

                        {
                            openCategories && <FloatingWindow>
                                <TabContainer>
                                    {
                                        categories.map(item =>
                                            <Tab
                                                key={item.id}
                                                title={item.title}
                                                handler={() => {
                                                    changeCategoryId(item.id);
                                                    setOpenCategories(!openCategories);
                                                }}
                                            />)
                                    }
                                </TabContainer>
                            </FloatingWindow>
                        }
                    </div>
                </div>
            </div>

            <MainSlider books={books} isLoading={isLoading}/>
        </div>
    )
}

