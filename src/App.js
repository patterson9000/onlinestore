
import "./App.css";
import NavBar from "./component/navBar";
import Footer from "./component/footer";
import AboutMe from "./component/aboutMe";
import CataLog from "./component/cataLog";
import ShoppingList from "./component/shoppingList";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 >My super online store</h1>
      <CataLog/>

      <AboutMe></AboutMe>
      
      <ShoppingList></ShoppingList>
      
     <Footer></Footer>
    </div>
  );
}

export default App;
