import React from 'react';
import './contact.css';
import { Footer } from '../../component/footer/Footer';
export const Contact = () => {
    return (
        <div className='containerContact'>
            <div className="backgroundContact">
                <div className="text">
                    <h1>
                        CONTACT.
                    </h1>
                    <p>
                        Lets have a chat
                    </p>
                </div>
            </div>
            <div className="contactInputs">
                <div className="div">
                    <p>Your Name</p>
                    <input type="text" />
                </div>

                <div className="div">
                    <p>Email</p>
                    <input type="text" />
                </div>


                <div className="div">
                    <p>Subject</p>
                    <input type="text" />
                </div>


                <div className="div">
                    <p>Your Name</p>
                    <textarea placeholder='Type Your Messege Here' name="" id="" cols="30" rows="10"></textarea>                </div>
                <button className='submitContactButton'>SUBMIT</button>
            </div>
            <Footer />
        </div>
    );
};
