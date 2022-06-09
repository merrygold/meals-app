
const Meals = ({users}) => {
  return (
    <div className="meals-list">
      {users.map(user => (
          <tr key={user.idCategory}>
          <td>{user.strCategory}</td>
          <td>{user.strCategoryDescription}</td>
        </tr>
      ))}
    </div>
  );
}
 
export default Meals;