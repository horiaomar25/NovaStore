import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import ProductList from "./routes/ProductList";
import ProductPage from "./routes/ProductPage";
import Checkout from "./routes/Checkout";
import "./App.css";

import FilteredList from "./routes/FilteredList";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <main className="align-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/productlist/:category" element={<FilteredList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
