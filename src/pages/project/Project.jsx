import React from 'react';
import './project.css';

import { Card2 } from '../../component/card/Card2';
import { Footer } from '../../component/footer/Footer';
import BackgroundProj1 from '../../assets/newFolder/proj1.jpg';

import BackgroundProj2 from '../../assets/newFolder/proj2.jpg';
import BackgroundProj3 from '../../assets/newFolder/proj3.jpg';
import BackgroundProj4 from '../../assets/newFolder/proj4.jpg';
import BackgroundProj5 from '../../assets/newFolder/proj5.jpg';
import BackgroundProj6 from '../../assets/newFolder/proj6.jpg';
import BackgroundProj7 from '../../assets/newFolder/proj7.jpg';
import BackgroundProj8 from '../../assets/newFolder/proj8.jpg';
import BackgroundProj9 from '../../assets/newFolder/proj9.jpg';
import BackgroundProj10 from '../../assets/newFolder/proj10.jpg';
import BackgroundProj11 from '../../assets/newFolder/proj11.jpg';
export const Project = () => {
    return (
        <div>

            <div className="projectSide">
                <div className="backgroundImageProject">
                    <div className="text">
                        <h2>PROJECTS.</h2>
                        <p>some of my most recent Works</p>
                    </div>
                </div>
            </div>

            <Card2 />

            <div className="containerPrices">
                <div className="prices">
                    <div className="priceCard">
                        <p>-Basic-</p>
                        <p>____</p>
                        <h1>$100</h1>
                        <p>-3 Days-</p>
                        <p>-3 pages-</p>
                        <p>-Featured-</p>
                        <p>-Responsive Design-</p>
                        <button>PURCHASE NOW</button>
                    </div>
                    <div className="priceCard">
                        <p>-Basic-</p>
                        <p>____</p>
                        <h1>$100</h1>
                        <p>-3 Days-</p>
                        <p>-3 pages-</p>
                        <p>-Featured-</p>
                        <p>-Responsive Design-</p>
                        <button>PURCHASE NOW</button>
                    </div>

                    <div className="priceCard">
                        <p>-Basic-</p>
                        <p>____</p>
                        <h1>$100</h1>
                        <p>-3 Days-</p>
                        <p>-3 pages-</p>
                        <p>-Featured-</p>
                        <p>-Responsive Design-</p>
                        <button>PURCHASE NOW</button>
                    </div>

                </div>
            </div>
            
            <Footer /> 



        </div>
    );
};
