import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/Auth";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/home" className="link">
            TravelBlog
          </Link>
        </div>
        <div className="navbar-div">
          <ul className="navbar-links">
            <li>
              <Link to="/home" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about us" className="about">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/createPost" className="kontakt">
                Create Post
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <a onClick={() => navigate("/myPosts")}>MyPosts</a>
              </li>
            ) : (
              <></>
            )}
            <li>
              {isLoggedIn ? (
                <a onClick={() => logout()}>Logout</a>
              ) : (
                <a onClick={() => navigate("/login")}>Login</a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
