import React from "react";
import {TopSlider} from "../../components/TopSlider";
import {Receipts} from "../../components/Receipts";
import {Sale} from "../../components/Sale";
import {Catalog} from "../../components/Catalog";
import {About} from "../../components/About";
import {Delivery} from "../../components/Delivery";
import {Social} from "../../components/Social";


export const Home = () => {

    const [books, setBooks] = React.useState([]);
    const [sale, setSale] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(1);

    React.useEffect(() => {
        setIsLoading(true);
        fetch('https://library-name.onrender.com/books?categoryId=' + categoryId)
            .then((res) => res.json())
            .then((arr) => {
                setBooks(arr);
                setIsLoading(false);
            });
    },[categoryId]);

    React.useEffect(() => {
        fetch('https://library-name.onrender.com/books?categoryId=6')
            .then((res) => res.json())
            .then((arr) => {
                setSale(arr);
                setIsLoading(false);
            });
    },[]);

    return (
        <>
            <TopSlider />
            <Receipts
                books={books}
                isLoading={isLoading}
                categoryId={categoryId}
                changeCategoryId={(i) => setCategoryId(i)}
            />
            <Sale books={sale} isLoading={isLoading}/>
            <Catalog />
            <About />
            <Delivery />
            <Social />
        </>

    )
}