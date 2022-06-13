import { useParams } from "react-router-dom";
import Api from "./Api";




const Recipe = () => {

    const { id } = useParams();
const ApiUrl =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
const { data: RecipeDetail } = Api(ApiUrl);

    return (  
<div className="recipe-list">
      <section className="ftco-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h1>
                <b> Meal Table</b>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-primary">
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Category</th>
                      <th>Area</th>
                      <th>Instructions</th>
                      <th>Meal Name</th>
                      <th>Youtube</th>
                      <th>Ingredients</th>
                      <th>Measures</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RecipeDetail &&
                      RecipeDetail.meals.map((recipe) => (
                        <tr key={recipe.idMeal}>
                          <td>{recipe.idMeal}</td>
                          <td>
                            <img className="meal-img" src={recipe.strMealThumb} alt="Recipe"></img>
                          </td>
                          <td>
                            <p>{recipe.strMeal}</p>
                          </td>

                          <td>
                            <b>{recipe.strCategory}</b>
                          </td>

                          <td>
                            <b>{recipe.strMeal}</b>
                          </td>

                          <td>
                            <b>{recipe.strInstructions}</b>
                          </td>

                          

                          <td>
                            <a href={recipe.strYoutube}> Watch on Youtube</a>
                          </td>

                          <td>
                            <ol>
                                <li>{recipe.strIngredient1}</li>
                                <li>{recipe.strIngredient2}</li>
                                <li>{recipe.strIngredient3}</li>
                                <li>{recipe.strIngredient4}</li>
                                <li>{recipe.strIngredient5}</li>
                                <li>{recipe.strIngredient6}</li>
                                <li>{recipe.strIngredient7}</li>
                                <li>{recipe.strIngredient8}</li>
                                <li>{recipe.strIngredient9}</li>
                                <li>{recipe.strIngredient10}</li>
                            </ol>
                          </td>


                          <td>
                            <ol>
                                <li>{recipe.strMeasure1}</li>
                                <li>{recipe.strMeasure2}</li>
                                <li>{recipe.strMeasure3}</li>
                                <li>{recipe.strMeasure4}</li>
                                <li>{recipe.strMeasure5}</li>
                                <li>{recipe.strMeasure6}</li>
                                <li>{recipe.strMeasure7}</li>
                                <li>{recipe.strMeasure8}</li>
                                <li>{recipe.strMeasure9}</li>
                                <li>{recipe.strMeasure10}</li>
                    
                            </ol>
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
}
 
export default Recipe;