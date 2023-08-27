import React from 'react';
import {Title} from "../Title";
import {MainSlider} from "../MainSlider";
import {Tab} from "../Tab";
import {TabContainer} from "../TabContainer";
import {FloatingWindow} from "../FloatingWindow";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories, selectCategories} from "../../redux/slices/categorySlice";
import './receipts.scss';

type ReceiptsProps = {
    books: any;
    changeCategoryId: (index: number) => void;
}

export const Receipts:React.FC<ReceiptsProps> = ({books, changeCategoryId}) => {

    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const [openCategories, setOpenCategories] = React.useState(false);

    React.useEffect(() => {
        dispatch(
            // @ts-ignore
            fetchCategories()
        )
    }, [])
    return (
        <div className='receipts'>
            <div className="container">
                <div className="receipts__content">

                    <div className="receipts__content-top">
                        <Title title='Горячие поступления'/>

                        <TabContainer>
                            {
                                categories.map((item:any) =>
                                    <Tab
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        handler={() => changeCategoryId(item.id)}
                                    />)
                            }
                            <Tab
                                id={categories.map((item: any,index: number) => index)}
                                key='Категории'
                                title='Категории'
                                handler={() => setOpenCategories(!openCategories)}
                            />
                        </TabContainer>

                        {
                            openCategories && <FloatingWindow>
                                <TabContainer>
                                    {
                                        categories.map((item: any) =>
                                            <Tab
                                                id={categories.map((item: any,index: number) => index)}
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

            <MainSlider books={books}/>
        </div>
    )
}

