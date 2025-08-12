import './Comment.css';
import knjiga from './Comment_images/knjiga.png'
import laptop from './Comment_images/laptop.png'
import galerija from './Comment_images/galerija.png'
import blob1 from './Comment_images/blob1.png'


function Comment(){

    return (
        <div className="app-feature-container">
            <div className="app-feature-content">

                
                    <h1 className='app-top-h1'>App Features</h1>
                    <p className='app-top-h3'>Discover inspiring travel stories, explore stunning galleries, and connect with fellow adventurers</p>
                

                <div className="app-feature-bottom">
                    <div className="app-box1">
                        <img src={knjiga} alt="knjiga" className='app-box1-img'/>
                        <p className='app-box1-p'>Discover firsthand experiences from fellow travelers</p>
                    </div>
                    <div className="app-box2">
                        <img src={laptop} alt="" className='app-box2-img'/>
                        <p className='app-box2-p'> Read stories, tips, and experiences shared by travelers worldwide</p>
                    </div>
                    <div className="app-box3">
                        <img src={galerija} alt="" className='app-box3-img'/>
                        <p className='app-box3-p'> Explore stunning photos from travelers around the world</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Comment;