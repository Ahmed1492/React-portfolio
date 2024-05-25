import React from 'react';
import './footer.css';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footer">
                <div className='leftFooter'>
                    <div className="footerHome">
                        <HomeIcon className='colorWhite' />
                        <p className='colorWhite'>
                            123 Housing Society <br />
                            Bangladsh
                        </p>
                    </div>
                    <br />
                    <div className="footerCall">
                        <CallIcon className='colorWhite' />
                        <p className='colorWhite'>
                            01157761127
                        </p>
                    </div>
                    <br />
                    <div className="footerEmail">
                        <MailIcon className='colorWhite' />
                        <p className='colorWhite'>

                            info@gmail.com
                        </p>
                    </div>
                </div>


                <div className="rightFooter">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipis explicabo molestiae, omnis quis laborum sed soluta doloribus. Suscipit, optio!</p>
                    <br />
                    <a href='https://www.facebook.com/profile.php?id=100027859422650'>
                        <FacebookIcon className='faceIcon' />
                    </a>
                    <TwitterIcon className='twiterIcon' />
                    <LinkedInIcon className='linkedinIcon' />


                </div>
            </div>



        </div>
    );
};
