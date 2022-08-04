
import "./App.css";
import NavBar from "./component/navBar";
import Footer from "./component/footer";
import QuantityPicker from "./component/quantityPicker";
import AboutMe from "./component/aboutMe";
import Product from "./component/product";
import CataLog from "./component/cataLog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>My super online store</h1>
      <CataLog/>

      <AboutMe></AboutMe>
      
      
     <Footer></Footer>
    </div>
  );
}

export default App;
