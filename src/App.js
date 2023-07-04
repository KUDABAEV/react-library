import {Header} from "./components/Header";
import {TopSlider} from "./components/TopSlider";
import {Receipts} from "./components/Receipts";
import {Sale} from "./components/Sale";
import {Catalog} from "./components/Catalog";
import './scss/index.scss';



function App() {
  return (
    <div className="App">
        <Header />
        <TopSlider />
        <Receipts />
        <Sale />
        <Catalog />
    </div>
  );
}

export default App;
