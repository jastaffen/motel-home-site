import React from 'react';

import { aboutText } from '../constants/aboutText';

const About = () => {
    return(
        <div className="about-container">

            <div>
                {aboutText.map(text => <p>{text}</p>)}
            </div>
            
        </div>
    )
}

export default About;