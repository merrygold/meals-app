import { useParams } from "react-router-dom";
import Api from "./Api";

const MealDetails = () => {
  


  const { category } = useParams();
  const ApiUrl =  'www.themealdb.com/api/json/v1/1/filter.php?c=' + category;
  console.log(ApiUrl)
  const { data: MealDetails } = Api(ApiUrl);


  return (
    <div className="blog-details">
      { MealDetails && 
        <h2 key={MealDetails.idMeal}>{MealDetails.idMeal}</h2>
      }
    </div>
  );
}
 
export default MealDetails;