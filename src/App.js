
import Api from './Api';
import './App.css';
import Meals from './Meals'



function App() {

  const { data: mealsCategories } = Api('https://www.themealdb.com/api/json/v1/1/categories.php')


  return (
  <div className="home">
    <h1>Meal App</h1>
    { mealsCategories && <Meals users={mealsCategories} /> }
  </div>

  );
}

export default App;
