
import Api from './Api';
import './App.css';
import Meals from './Meals'
import MealDetails from './Meal-Detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';




function App() {

  const { data: mealsCategories } = Api('https://www.themealdb.com/api/json/v1/1/categories.php')

  return (
  
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route  path="/Categories">
            { mealsCategories && <Meals users={mealsCategories.categories} /> }  
            </Route>
            <Route exact path="/">
             <Home/>  
            </Route>
            <Route path="/meal-details/:category">
              <MealDetails />
            </Route>
          </Switch>
        </div>


    </Router>
 
  
  );
}

export default App;
