import { useParams } from "react-router-dom";
import Api from "./Api";

const MealDetails = () => {
  const { category } = useParams();
  const ApiUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
  const { data: MealDetails } = Api(ApiUrl);

  return (
    <div className="blog-details">
      {MealDetails &&
        MealDetails.meals.map((meal) => (
          <div key={meal.idMeal}>
            <h2>Id: {meal.idMeal}</h2>
            <p>Name: {meal.strMeal}</p>
          </div>
        ))}
    </div>
  );
};

export default MealDetails;
