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
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../redux/slices/categorySlice";


export const Home = () => {

    const {categoryId, categorySale} = useSelector(state => state.category)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const [books, setBooks] = React.useState([]);
    const [sale, setSale] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        if (categoryId === 0) {
            axios.get('https://library-name.onrender.com/books')
                .then(response => {
                    let books = response.data.splice(0, 10);
                    setBooks(books);
                    setIsLoading(false);
                })
        } else {
            axios.get('https://library-name.onrender.com/books?categoryId=' + categoryId)
                .then(response => {
                    setBooks(response.data);
                    setIsLoading(false);
                })
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
        axios.get(`https://library-name.onrender.com/books?categoryId=${categorySale}`)
            .then(response => {
                setSale(response.data);
                setIsLoading(false);
            })
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
                isLoading={isLoading}
                categoryId={categoryId}
                changeCategoryId={onChangeCategory}
            />
            <Sale books={sale} isLoading={isLoading}/>
            <Catalog/>
            <About/>
            <Delivery/>
            <Social/>
        </>

    )
}