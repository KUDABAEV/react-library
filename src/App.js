import React from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {ShoppingCart} from "./pages/ ShoppingCart";
import './scss/index.scss';


function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/basket' element={<ShoppingCart />}/>
            </Routes>
            <Footer />
        </div>


    );
}

export default App;
