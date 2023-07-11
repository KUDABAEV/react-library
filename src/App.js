import React from "react";
import {Header} from "./components/Header";
import {TopSlider} from "./components/TopSlider";
import {Receipts} from "./components/Receipts";
import {Sale} from "./components/Sale";
import {Catalog} from "./components/Catalog";
import {About} from "./components/About";
import {Delivery} from "./components/Delivery";
import {Social} from "./components/Social";
import {Footer} from "./components/Footer";
import './scss/index.scss';


function App() {
    return (
        <div className="App">
            <Header />
            <TopSlider />
            <Receipts />
            <Sale />
            <Catalog />
            <About />
            <Delivery />
            <Social />
            <Footer />
        </div>
    );
}

export default App;
