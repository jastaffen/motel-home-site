import React from 'react';

import { motelHomeSummary } from '../constants/motelhomesummary';

const FixedContactContainer = () => {
    return(

        <div className="contact-info">
            
            <p className="mmm-summary"><div id="ci-border-left"></div>{motelHomeSummary}</p>

            <p>INQUIRIES:
                <span>
                    <a href="mailto:motelhomemusic@gmail.com" 
                    id="email-link">{"motelhomemusic@gmail.com".toUpperCase()}</a>
                </span>
            </p>

            {/* <p>NEW YORK CITY<span>430 LAFAYETTE STREET</span> </p> */}

        </div>
        
    )
}

export default FixedContactContainer;