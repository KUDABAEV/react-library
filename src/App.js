import {Header} from "./components/Header";
import {TopSlider} from "./components/TopSlider";
import {Receipts} from "./components/Receipts";
import {Sale} from "./components/Sale";
import {Catalog} from "./components/Catalog";
import './scss/index.scss';
import {About} from "./components/About";
import {Delivery} from "./components/Delivery";
import {Social} from "./components/Social";



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
    </div>
  );
}

export default App;
