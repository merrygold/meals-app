import { Link } from "react-router-dom";



const Home = () => {
    return (  

    <div>
            <h1 className="home-heading mt-3">Get the Recipe of your choice and Delight</h1>
            <Link to="/Categories">
                <img className="home-img" src=".\home-meals.jpg" alt="meal"></img>
            </Link>
    </div>

    );
}
 
export default Home;