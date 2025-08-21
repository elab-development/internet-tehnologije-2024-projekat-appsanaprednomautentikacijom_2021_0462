import "./Comment.css";
import knjiga from "./Comment_images/knjiga.png";
import laptop from "./Comment_images/laptop.png";
import galerija from "./Comment_images/galerija.png";
import blob1 from "./Comment_images/blob1.png";
import { useEffect } from "react";
import slika from './Comment_images/slika6.jpg';

function Comment() {
  return (
    <div className="app-feature-container">
          <div className="com_left">
            <div className="left_contetncom">
                  <p className="p1_com">Travel opens your mind in ways nothing else can. By stepping out of your everyday routine and into a new culture, you're challenged to see the world—and yourself—from a different perspective. Whether it's navigating unfamiliar streets, trying food you can't pronounce, or communicating without a shared language, travel pushes your boundaries and builds confidence. </p>
                  <h2 className="h2_com">"Travel is the only thing you buy that makes you richer."</h2>
                  <p className="p2_com">Beyond personal growth, travel connects you to the stories of others. You begin to realize how different—and yet how similar—people are across the globe. These shared moments, whether over a cup of street coffee or a long train ride, foster a deeper sense of humanity. In the end, travel isn't just about seeing new places—it's about becoming more connected to the world and your place within it.</p>
                  <h2 className="h3_com">"The world is a book, and those who do not travel read only one page."</h2>
            </div>
          </div>
          <div className="com_right">
              <img src={slika} alt="" className="com_rightimg"/>
          </div>
    </div>
  );
}
export default Comment;
