
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import React, { useState } from 'react';
import './Cards.css';
import Footer from "../Footer/Footer";



function Cards({users}){

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };


      return(
        <>
            <NavBar/>
            <div className={`whole-page ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="blogWrapper">
                    <h1 className="naslov">Explore destinations!</h1>
                    <p className="cardsTekst">"Explore endless Perspectives: Your Gateway to Travel topics"</p>
                    <div className="cardsContainer">
                        <div className="card-cards">
                            {users.map((el) => {
                                return <div className="kartica"> <Card key={el.id} el={el} /> </div> // Dodajemo 'key' za bolju optimizaciju
                            })}
                        </div>
                    </div>
                    <button className="switch-button" onClick={toggleTheme}>
                        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                    </button>
                </div>
            </div>
           <Footer></Footer>
            
        </>
    );
};


export default Cards;