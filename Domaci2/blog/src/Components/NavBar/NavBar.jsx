import './NavBar.css'
function NavBar(){

    return(
      <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">TravelBlog</a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/destinations">Destinations</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    );
}
export default NavBar;