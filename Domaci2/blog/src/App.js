
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import Header from './Components/Header/Header.jsx';
import Comment from './Components/Comment/Comment.jsx';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import Cards from './Components/Cards/Cards.jsx';
import Card from './Components/Card/Card.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import './Components/ImageSlider/ImageSlider.css';
import './Components/Footer/Footer.jsx';

//importovanje slika za slider
import slika1 from './Components/ImageSlider/ImagesSlider/slika1.jpg';
import slika2 from './Components/ImageSlider/ImagesSlider/slika2.jpg';
import slika3 from './Components/ImageSlider/ImagesSlider/slika3.jpg';
import slika4 from './Components/ImageSlider/ImagesSlider/slika4.jpg';
import Footer from './Components/Footer/Footer.jsx';

//importovanje slika za kartice
import slikablog1 from './Components/Card/card_images/slikablog1.jpeg';
import slikablog2 from './Components/Card/card_images/slikablog2.jpg';
import slikablog3 from './Components/Card/card_images/slikablog3.jpg';
import slikablog4 from './Components/Card/card_images/slikablog4.jpg';
import slikablog5 from './Components/Card/card_images/slikablog5.jpeg';
import slikablog6 from './Components/Card/card_images/slikablog6.jpg';






function App() {

  const users=[
    {
      url: slikablog1,
      destination: "Panama",
      description: "Explore Panama with me – a lively city with stunning nature and culture!",
      userName:"Liam O'Connor"
    },
    {
      url: slikablog2,
      destination: "Paris",
      description: "Check out my review of Paris, the city of romance and culture! This is must see!",
      userName:"Maria Gonzalez"
    }, {
      url: slikablog3,
      destination: "Berlin",
      description: "Discover Berlin through my eyes – a city full of history and creativity!",
      userName:"Elena Ivanova"
    },
    {
      url: slikablog4,
      destination: "Belgrade",
      description: "Check out my review of Belgrade, a vibrant city with a rich past, food and tradition!",
      userName:"Ahmed Al-Farsi"
    },
    {
      url: slikablog5,
      destination: "Tokyo",
      description: "Take a look at my review of Tokyo, a blend of tradition and modernity!",
      userName:"Sophia Müller"
    },
    {
      url: slikablog6,
      destination: "Rome",
      description: "Check out my review of Rome, where ancient history meets modern charm!",
      userName:"Jin Park"
    }
  ];

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
          <AboutUs/>
          <Comment/>
          <div className='gallery'>
          <h1 className='title'>Check our Gallery!</h1>
          </div>
          <div style={containerStyles}> 
            {/* <div className='gallery'><h1 className='title'>Check our Gallery!</h1></div> */}
          <ImageSlider slides={slides}/>
          </div>
          <Footer/>
          </>}/>
          <Route path="blog" element={<Cards users={users}/>}/> 
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
