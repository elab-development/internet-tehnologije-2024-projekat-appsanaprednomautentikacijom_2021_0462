
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Header from './Components/Header/Header.jsx';
import Comment from './Components/Comment/Comment.jsx';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import './Components/ImageSlider/ImageSlider.css';
import './Components/Footer/Footer.jsx';
import Card from './Components/Card/Card.jsx';
//importovanje slika za slider
import slika1 from './Components/ImageSlider/ImagesSlider/slika1.jpg';
import slika2 from './Components/ImageSlider/ImagesSlider/slika2.jpg';
import slika3 from './Components/ImageSlider/ImagesSlider/slika3.jpg';
import slika4 from './Components/ImageSlider/ImagesSlider/slika4.jpg';
import Footer from './Components/Footer/Footer.jsx';




function App() {

  const slides=[
    {url:slika1, title: 'Beach'},
    {url:slika2, title: 'Mountain'},
    {url:slika3, title: 'Street'},
    {url:slika4, title: 'View'},
  ];

  const containerStyles={
    width: "700px",
    height: "400px",
    margin: "0 auto",
    marginTop: "100px",
    marginBottom: "50px",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginForm/>}/>
        <Route path="home" element={<>
          <NavBar/>
          <Header/>
          <Comment/>
          <div style={containerStyles}> 
            <div className='gallery'><h1 className='title'>Check our Gallery!</h1></div>
          <ImageSlider slides={slides}/>
          </div>
          <Footer/>
          </>}/>
          <Route path="blog" element={<><Card/></>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
