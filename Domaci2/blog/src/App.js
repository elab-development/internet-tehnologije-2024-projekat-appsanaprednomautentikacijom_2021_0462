import { AuthForm } from "./Components/Auth/AuthForm/AuthForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comment from "./Components/Comment/Comment.jsx";
import Cards from "./Components/Blog/Cards/Cards.jsx";
import AboutUs from "./Components/Layout/AboutUs/AboutUs.jsx";
import CreatePost from "./Components/Layout/CreatePost/CreatePost.jsx";
import "./Components/Layout/Footer/Footer.jsx";
import "react-slideshow-image/dist/styles.css";
import LandingPage from "./Components/Layout/LandingPage/LandingPage.jsx";
import EmailConfirmation from "./Components/Auth/EmailConfirmation/EmailConfirmation.jsx";


import Footer from "./Components/Layout/Footer/Footer.jsx";
import ConfirmMfa from "./Components/Auth/ConfirmMfa/ConfirmMfa.jsx";
import CreateMfa from "./Components/Auth/CreateMfa/CreateMfa.jsx";
import { useEffect } from "react";
import HomePage from "./Components/Layout/HomePage/HomePage.jsx";
import { AuthProvider } from "./Context/Auth.jsx";
import City from "./Components/Blog/City/City.jsx";
import MyPosts from "./Components/Layout/MyPosts/MyPosts.jsx";
function App() {
  //Hardkodovani useri za kartice, svaka kartica ima sliku, destinaciju, opis i userName korisnika.
  const updateIsLoggedIn = (status) => {};

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<AuthForm type="Login" />} />
          <Route path="login" element={<AuthForm type="Login" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<AuthForm type="Register" />} />
          <Route path="blog" element={<Cards />} />
          <Route path="about us" element={<AboutUs />} />
          <Route path="createPost" element={<CreatePost />} />
          <Route
            path="confirmMfa"
            element={<ConfirmMfa updateIsLoggedIn={updateIsLoggedIn} />}
          />
          <Route path="confirmEmail" element={<EmailConfirmation />} />
          <Route path="createMfa" element={<CreateMfa />} />
          <Route path="post/:id" element={<City />} />
          <Route path="myPosts" element={<MyPosts />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
