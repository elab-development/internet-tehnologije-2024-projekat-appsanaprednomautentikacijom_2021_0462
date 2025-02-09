import './Comment.css';
import osoba1 from './Comment_images/person1.jpg';
import osoba2 from './Comment_images/person2.jpg';
import osoba3 from './Comment_images/person3.jpg';


function Comment(){

    return (
        <div className='comment'>

            <h1 className='comment-title'>Guest Feedback</h1>

            <div className='comments'>

                <div className='c1'>
                    <img src={osoba1} alt="slika1" className='comment-img'/>
                    <h1 className='naslov-comment'>James R.</h1>
                    <p className='text-comment'>"Absolutely love this blog! The travel guides are super detailed, and the tips helped me plan my last trip perfectly."</p>
                </div>

                <div className='c2'>
                    <img src={osoba2}  alt="slika2" className='comment-img'/>
                    <h1 className='naslov-comment'>Daniel T.</h1>
                    <p className='text-comment'>"Great mix of personal experiences and useful travel hacks! The photography is stunning too—makes me want to pack my bags and go explore."</p>
                </div>

                <div className='c3'>
                    <img src={osoba3}  alt="slika3" className='comment-img'/>
                    <h1 className='naslov-comment'>Michael B.</h1>
                    <p className='text-comment'>"This blog has become my go-to for trip inspiration. I appreciate the honest reviews and off-the-beaten-path recommendations. Keep up the great work!"</p>
                </div>


            </div>



        </div>
    );
}
export default Comment;