import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Header from "./Components/Header/Header.jsx";
import Comment from "./Components/Comment/Comment.jsx";
import Cards from "./Components/Cards/Cards.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import SlideShow from "./Components/SlideShow/SlideShow.jsx";
import "./Components/Footer/Footer.jsx";
import "react-slideshow-image/dist/styles.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";


//importovanje slika za kartice
import slikablog1 from "./Components/Card/card_images/slikablog1.jpeg";
import slikablog2 from "./Components/Card/card_images/slikablog2.jpg";
import slikablog3 from "./Components/Card/card_images/slikablog3.jpg";
import slikablog4 from "./Components/Card/card_images/slikablog4.jpg";
import slikablog5 from "./Components/Card/card_images/slikablog5.jpeg";
import slikablog6 from "./Components/Card/card_images/slikablog6.jpg";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  const users = [
    {
      url: slikablog1,
      destination: "Panama",
      description:
        "Explore Panama with me – a lively city with stunning nature and culture!",
      userName: "Liam O'Connor",
    },
    {
      url: slikablog2,
      destination: "Paris",
      description:
        "Check out my review of Paris, the city of romance and culture! This is must see!",
      userName: "Maria Gonzalez",
    },
    {
      url: slikablog3,
      destination: "Berlin",
      description:
        "Discover Berlin through my eyes – a city full of history and creativity!",
      userName: "Elena Ivanova",
    },
    {
      url: slikablog4,
      destination: "Belgrade",
      description:
        "Check out my review of Belgrade, a vibrant city with a rich past, food and tradition!",
      userName: "Ahmed Al-Farsi",
    },
    {
      url: slikablog5,
      destination: "Tokyo",
      description:
        "Take a look at my review of Tokyo, a blend of tradition and modernity!",
      userName: "Sophia Müller",
    },
    {
      url: slikablog6,
      destination: "Rome",
      description:
        "Check out my review of Rome, where ancient history meets modern charm!",
      userName: "Jin Park",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route
          path="home"
          element={
            <div className="big-div">
              <NavBar />
              <LandingPage />

              <Comment />
              <AboutUs />
              <Contact />
              <SlideShow />
              <Footer />
            </div>
          }
        />
        <Route path="blog" element={<Cards users={users} />} />
        <Route path="about us" element={<AboutUs/>} />
        <Route path="contact" element={<Contact/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
