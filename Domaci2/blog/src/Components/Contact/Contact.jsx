import React from "react";
import './Contact.css';
import contact_slikaa from './Contact_images/picture_contact.jpg'

function Contact(){
    return(
        <div className="contact-container">
           <div className="contact-items">
                <div className="box1-contact">
                    <div className="contact-form">
                        <h1 className="form-title">Contact us</h1>
                        <input type="text" placeholder="Name" className="form_element"/>
                        <input type="email" placeholder="Email" className="form_element"/>
                        <input type="textarea" placeholder="Message" className="form_element-message"/>
                        <input type="button" value="Send Message" className="form_button"/>
                    </div>
                </div>
                <div className="box2-contact">
                    <img src={contact_slikaa} alt="ss" className="box2-contact_image"/>
                </div>
           </div>
        </div>
    );
}

export default Contact;