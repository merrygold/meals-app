import { Link } from "react-router-dom";

const Meals = ({ users }) => {
  return (
    <div className="meals-list">
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h1>
                <b> Meal Categories</b>
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
                      <th>Category</th>
                      <th>Category Decription</th>
                      <th>Meal Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((user) => (
                        <tr key={user.idCategory}>
                          <td>{user.idCategory}</td>
                          <td>
                            <b>{user.strCategory}</b>
                          </td>
                          <td>{user.strCategoryDescription}</td>
                          <td>
                            <img alt="Meal" src={user.strCategoryThumb}></img>
                            <Link to={`/meal-details/${user.strCategory}`}>
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  More Details
                                </button>
                              </div>
                            </Link>
                          </td>
                          <td></td>
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

export default Meals;
