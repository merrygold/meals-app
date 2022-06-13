import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "./Api";

const MealDetails = () => {
  const { category } = useParams();
  const ApiUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
  const { data: MealDetails } = Api(ApiUrl);

  return (

    <div className="meals-list">
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h1>
               {category} Meals Available in Menu
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table">
                <thead className="thead-primary meal-container">
                  <tr>
                    <th>#</th>
                    <th className="meal-width">Meal Name</th>
                    <th>Meal Image</th>
                  </tr>
                </thead>
                <tbody>
                  {MealDetails &&
                    MealDetails.meals.map((meal) => (
                      <tr className="meal-container"  key={meal.idMeal}>
                        <td>{meal.idMeal}</td>
                        <td>
                          <b className="meal-text">{meal.strMeal}</b>
                        </td>
              
                        <td className="meal-img">
                          <img className="meal-img" alt="Meal Catgories" src={meal.strMealThumb}></img>

                     
                          <Link to={`/recipe/${meal.idMeal}`}>
                            <div className="text-center mt-3">
                              <button
                                type="button"
                                className="btn btn-primary"
                              >
                                Recipe Here
                              </button>
                            </div>
                          </Link>

                        </td>
                       
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>





  );
};

export default MealDetails;



