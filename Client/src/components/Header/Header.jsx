import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="nav">
          <h1>Apple Store</h1>
          {/* <input type="text" name="search" id="search" /> */}
          <nav>
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/product">
              Create Product
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
