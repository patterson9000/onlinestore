import {Link} from 'react-router-dom';
import "./home.css";

const Home = () => {
    return (
        <div className="home">
          <div className="power">
            <h1>The Athlete Warehouse</h1>
            <h4>More Plates. More Dates.</h4>
            <img src="/images/power2.jpg" alt=""/>
         </div>

            <Link className="btn btn-lg btn-dark" to="/catalog">
                check out my catalog
            </Link>
            
        </div>
    );
};
 

export default Home; 