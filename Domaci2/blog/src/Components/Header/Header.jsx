
import './Header.css';
import { useNavigate } from 'react-router-dom';




function Header(){

  const navigate = useNavigate();

  const explore = ()=>{
    navigate('/blog')
  };

  return(
    <div className="div-section">

      <div className="header-container">
        <div className="left-div-header">
        
            <h1 className='header-h1'>TravelBlog</h1>
            <p className='header-par'>"One World, Infinite Journeys."</p>
            <button className='header-bu' onClick={explore}>Explore</button>

        </div>
        <div className="right-div-header">
          
            {/* <img src={slika_header} alt="" className='header-slika'/> */}
          
        </div>
      </div>
    </div>
  );
}


export default Header;

