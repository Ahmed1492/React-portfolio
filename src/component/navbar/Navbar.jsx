import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className='header'>
            <div className="navBar">
                <div className="rightNavBar">
                    <h3>Portfolio.</h3>

                </div>


                <ul className='leftNavBar'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/project'}>Project</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};
