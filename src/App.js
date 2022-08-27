import "./App.css";
import NavBar from "./component/navBar";
import Home from "./component/home";
import Footer from "./component/footer";
import AboutMe from "./component/aboutMe";
import CataLog from "./component/cataLog";
import ShoppingList from "./component/shoppingList";
import Cart from "./component/cart";
import Admin from "./component/admin";
import GlobalState from "./store/globalState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CataLog />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/shoppinglist" element={<ShoppingList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
