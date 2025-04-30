import './Comment.css';

function Comment(){

    return (
    <div className='Comment'>

        <p className='text-above'>Leave a feedback!</p>

        <div className="comment-container">
            {/* Tekst na levoj strani */}
            <div className="profile-picture1"></div>
            <p className="text">"I absolutely love this website! The design is modern and sleek!" This is a great way to show my expirience.</p>
            
        </div>

    </div>
    );
}
export default Comment;