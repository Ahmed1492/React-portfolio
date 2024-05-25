import React from 'react';
import './home.css';

import { Footer } from '../../component/footer/Footer';
import { Card2 } from '../../component/card/Card2';
export const Home = () => {
    return (
        <div className='homePage'>
            <div className="backgroundHomePage">
                <div className="layOut">
                </div>
                <div className="homepageDescription">
                    <p>HI I AM A FREELANCER.</p>
                    <h1>React Developer.</h1>
                    <div className="homePageButton">
                        <button className='projectButton'>PROJECTS</button>
                        <button className='contactButton'>CONTACT</button>
                    </div>
                </div>
            </div>
            <Card2 />
            <Footer />
        </div>
    );
};
