import React from 'react';

import { aboutText } from '../constants/aboutText';

const About = () => {
    return(
        <div className="about-container test">

            <div>
                {aboutText.map(text => <p>{text.toUpperCase()}</p>)}
            </div>
            
        </div>
    )
}

export default About;