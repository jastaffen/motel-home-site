import React from 'react';

import { motelHomeSummary } from '../constants/motelhomesummary';

const FixedContactContainer = () => {
    return(

        <div className="contact-info">
            
            <p className="mmm-summary"><div id="ci-border-left"></div>{motelHomeSummary}</p>

            <p className="mmm-summary">INQUIRIES:
                <span style={{marginTop: '2px'}}>
                    <a href="mailto:motelhomemusic@gmail.com" 
                    id="email-link">{"motelhomemusic@gmail.com".toUpperCase()}</a>
                </span>
            </p>

            <p className="mmm-summary">NEW YORK, NEW YORK</p>

        </div>
        
    )
}

export default FixedContactContainer;