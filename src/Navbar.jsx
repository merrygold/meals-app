import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-1">
        <Link to="/"
         style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
          padding: "10px"
        }}
        > Home </Link>
        <span className="sr-only">(current)</span>
      </div>
      <div className="nav-1">
        <Link
          to="/Categories"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            padding: "10px"
            
          }}
        >
          Categories
        </Link>
      </div>
      {/* <div className="nav-1"></div> */}
    </nav>
  );
};

export default Navbar;
