import NavBar from "../NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import Comment from "../../Comment/Comment";
import AboutUs from "../AboutUs/AboutUs";
import SlideShow from "../../SlideShow/SlideShow";
import Footer from "../Footer/Footer";
import "react-slideshow-image/dist/styles.css";

const HomePage = () => {
  return (
    <div className="big-div">
      <NavBar />
      <LandingPage />
      <Comment />
      <SlideShow />
      <Footer />
    </div>
  );
};

export default HomePage;
