
import './Header.css';
import slika_header from './Header_images/pozadina_header.jpg'


function Header(){

  return(
  <div className='header'>
    
    <div className='first-box'>
      <h1 className='font'>Discover Your <br/> Life Journey</h1>
      <p className='paragraph'>Life is an ever-evolving adventure, filled with new experiences, challenges, and opportunities<br/> Travelblog is your guide to personal growth, self-discovery, and meaningful connections<br/> Unlock Your Potential – Gain insights and wisdom</p>
      <button className='dugme-first-box'>Get Started</button>
    </div>

    <div className='second-box'>
    <img src={slika_header} alt="slika" className='slika_header'/>
    </div>



  </div>
  );
}


export default Header;

