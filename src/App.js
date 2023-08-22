import React from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {ShoppingCart} from "./pages/ ShoppingCart";
import {FullBook} from "./pages/FullBook";
import {Favorites} from "./pages/Favorites";
import './scss/index.scss';



function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/favorites' element={<Favorites />}/>
                <Route path='/basket' element={<ShoppingCart />}/>
                <Route path='/book/:id' element={<FullBook />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
