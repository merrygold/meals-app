
import Api from './Api';
import './App.css';
import Meals from './Meals'
import MealDetails from './Meal-Detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {

  const { data: mealsCategories } = Api('https://www.themealdb.com/api/json/v1/1/categories.php')

  return (
  
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
            { mealsCategories && <Meals users={mealsCategories.categories} /> }  
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
