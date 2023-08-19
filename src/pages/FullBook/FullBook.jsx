import React from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemsInBasket} from "../../redux/slices/basketSlice";
import {booksItems} from "../../redux/slices/booksSlice";
import './fullBook.scss';

export const FullBook = () => {

    const [book,setBook] = React.useState();
    const {id} = useParams();

    const dispatch = useDispatch();
    const books = useSelector(state => state.basket.itemsInBasket);
    const booksAll = useSelector(booksItems).books;
    const isBookInCart = books.some(book => book.id === +id);
    const currentBook  =  booksAll.find(book=> book.id === +id )

    const addProductClick = (event) => {
        event.stopPropagation();

        if (isBookInCart){
            dispatch(deleteItemFromCart(currentBook.id));
        } else {
            dispatch(setItemsInBasket(currentBook));
        }
    }

    React.useEffect(() => {
        async function fetchBook() {
            try {
                const {data} = await axios.get(`https://library-name.onrender.com/books/` + id)
                setBook(data)
            }catch (error) {
                alert('Ошибка при получении книги')
            }
        }

        fetchBook();
    },[])

    if (!book){
        return <div className='fullBook-loading'>Загрузка</div>
    }

    return (
        <div className="fullBook">
            <div className='container'>
                <div className="fullBook__content">
                    <div className="fullBook__left">
                        <img className='fullBook__img' src={book.imageUrl} alt="Книга"/>
                    </div>
                    <div className="fullBook__right">
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        <p>{book.description}</p>
                        <div className="fullBook__right-bye">
                            <h4>{book.price} руб</h4>
                            <Button
                                type={isBookInCart ? 'secondary' : 'primary'}
                                onClick={addProductClick}
                            >
                                { isBookInCart ? 'В корзине' : 'В корзину' }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}