import React from 'react';

import './aboutme.scss';

import about from '../assets/about-lily.jpg';
function AboutMe() {
     return (
        <div id = "AboutMe" className = " shadow-pop-tr">
            <div className = 'aboutme'>
                <div>
            <img className = "about-pic" src = {about} alt = "lilly" />
            </div>
            <div className = "about-text">
                    <h3>2 year old</h3>
            <p>Looking for work, Momma said I spend all the money, help a lil sister out please.
                 Take a look at my pictures and send some work my way, I promise to smile.
                 I would love to be your brand ambassador, contact me and be the first to jump on this bandwagon!!!!</p>
                </div>
                </div>
        </div>
     )
  }
export default AboutMe;