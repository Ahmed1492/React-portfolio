import React from 'react';
import './card.css';
import Proj1 from '../../assets/project1.png';
import Proj2 from '../../assets/project2.png';
import Proj3 from '../../assets/project3.png';
export const Card2 = () => {
    return (
        <div className='contaierProjects'>
            <h1>Projects</h1>
            <div className="cardProjects">

                <div className="card">
                    <img src={Proj1} alt="" />
                    <h3>Ecommerce Website Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi, explicabo deserunt, quis ducimus eaque similique quidem amet iure veniam nobis aperiam ea reiciendis repellat, beatae ipsa possimus! Veniam, molestias!</p>
                    <div className="cardButtons">
                        <button>VIEW</button>
                        <button>SOURCE</button>
                    </div>
                </div>
                <div className="card">
                    <img src={Proj2} alt="" />
                    <h3>Ecommerce Website Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi, explicabo deserunt, quis ducimus eaque similique quidem amet iure veniam nobis aperiam ea reiciendis repellat, beatae ipsa possimus! Veniam, molestias!</p>
                    <div className="cardButtons">
                        <button>VIEW</button>
                        <button>SOURCE</button>
                    </div>
                </div>
                <div className="card">
                    <img src={Proj3} alt="" />
                    <h3>Ecommerce Website Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi, explicabo deserunt, quis ducimus eaque similique quidem amet iure veniam nobis aperiam ea reiciendis repellat, beatae ipsa possimus! Veniam, molestias!</p>
                    <div className="cardButtons">
                        <button>VIEW</button>
                        <button>SOURCE</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
