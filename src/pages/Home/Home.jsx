import React from "react";
import {useNavigate} from "react-router-dom";
import qs from 'qs';
import {TopSlider} from "../../components/TopSlider";
import {Receipts} from "../../components/Receipts";
import {Sale} from "../../components/Sale";
import {Catalog} from "../../components/Catalog";
import {About} from "../../components/About";
import {Delivery} from "../../components/Delivery";
import {Social} from "../../components/Social";
import {useDispatch, useSelector} from "react-redux";
import {selectCategoryId, selectCategorySale, setCategoryId} from "../../redux/slices/categorySlice";
import {booksItems, fetchBooks} from "../../redux/slices/booksSlice";
import {fetchSale, selectSale} from "../../redux/slices/saleSlice";


export const Home = () => {

    const categoryId = useSelector(selectCategoryId);
    const categorySale = useSelector(selectCategorySale);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const books = useSelector(booksItems);
    const { sale } = useSelector(selectSale)

    React.useEffect(() => {
        if (categoryId === 0) {
            dispatch(fetchBooks({
                categoryId
            }))

        } else {
            dispatch(fetchBooks({
                categoryId
            }))
        }

    }, [categoryId]);
    //
    React.useEffect(() => {
        let id = window.location.search.split('?categoryId=')[1];
        if (id === undefined) {
            id = 0;
        }
        dispatch(setCategoryId(+id))
    }, [])
    //

    React.useEffect(() => {
        dispatch(fetchSale({
            categorySale
        }))

    }, [categorySale]);

    React.useEffect(() => {
        const queryString = qs.stringify({
            categoryId,
        })
        navigate(`?${queryString}`);
    },[categoryId])

    return (
        <>
            <TopSlider/>
            <Receipts
                books={books}
                categoryId={categoryId}
                changeCategoryId={onChangeCategory}
            />
            <Sale books={sale}/>
            <Catalog/>
            <About/>
            <Delivery/>
            <Social/>
        </>

    )
}