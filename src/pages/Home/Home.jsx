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

    return (
        <>
            <TopSlider />
            <Receipts
                books={books}
                isLoading={isLoading}
                categoryId={categoryId}
                changeCategoryId={(i) => setCategoryId(i)}
            />
            <Sale books={books} isLoading={isLoading}/>
            <Catalog />
            <About />
            <Delivery />
            <Social />
        </>

    )
}