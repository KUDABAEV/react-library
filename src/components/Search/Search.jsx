import React from "react";
import axios from "axios";
import {Card} from "../Card";
import {FloatingWindow} from "../FloatingWindow";
import {useDispatch, useSelector} from "react-redux";
import {selectSearch, setNewSearchText, setResponseSearchBooks} from "../../redux/slices/searchSlice";
import debounce from 'lodash.debounce';
import './search.scss';

export const Search = () => {

    const [value, setValue] = React.useState('');
    const {newSearchText, responseSearchBooks} = useSelector(selectSearch);
    const dispatch = useDispatch();
    const searchRef = React.useRef()

    const inputRef = React.useRef();

    const onClickClose = () => {
        setValue('');
        dispatch(setNewSearchText(''));
        inputRef.current.focus();
    }
    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setNewSearchText(str));
        }, 1000),
        [],
    )

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value);
    }

    React.useEffect(() => {

        const searchImportance = newSearchText ? `title_like=${newSearchText}` : '';

        axios.get(`https://library-name.onrender.com/books?${searchImportance}`)
            .then(response => dispatch(setResponseSearchBooks(response.data)))
    }, [newSearchText]);

    const handleClickOutside = (event) => {
        if (!event.composedPath().includes(searchRef.current)) {
            setValue('');
            dispatch(setNewSearchText(false));
            console.log('outside')
        }
        document.body.removeEventListener('click', handleClickOutside)
    }
    React.useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
    }, [newSearchText])

    React.useEffect(() => {

        document.body.addEventListener('click', handleClickOutside);
        return () => {
            console.log('test')
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div ref={searchRef} className="header__search">
            <input
                ref={inputRef}
                onChange={onChangeInput}
                value={value}
                className="header__search-input"
                type="text"
                placeholder="Поиск"
            />

            {
                newSearchText && (
                    <svg
                        onClick={onClickClose}
                        className='clear-icon'
                        height="48"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                        <path d="M0 0h48v48h-48z" fill="none"/>
                    </svg>
                )
            }
            {
                newSearchText && (
                    <FloatingWindow>
                        {
                            responseSearchBooks.map(item => <Card key={item.id} img={item.imageUrl} title={item.title}
                                                                  price={item.price}/>)
                        }
                    </FloatingWindow>
                )
            }
        </div>
    )
}