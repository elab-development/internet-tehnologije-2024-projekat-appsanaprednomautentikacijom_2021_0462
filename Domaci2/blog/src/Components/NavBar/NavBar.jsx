import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/home" className='link'>TravelBlog</Link>
        </div>
        <div className="navbar-div">
          <ul className="navbar-links">
            <li><Link to="/home" className='home'>Home</Link></li>
            <li><Link to="/about us" className='about'>About</Link></li>
            <li><Link to="/blog" className='blog'>Blog</Link></li>
            <li><Link to="/contact" className='kontakt'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;