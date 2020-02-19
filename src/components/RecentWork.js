import React from 'react';

import { recentWork } from '../constants/recentWorkList';
import BulletPoint from '../images/bulletpoint.png'

const RecentWork = () => {

    const lastIndex = (index) => {
        return recentWork[index] === recentWork[recentWork.length - 1 ]
    }

    return(

    <div className="rw-container">
        
        <h4 id="rw-title">RECENT WORK</h4>
        
        <ul className="work">

            {recentWork.map((work, index) => 

            <div>

                <li key={index}>{work.toUpperCase()}</li>
                
                <img className="plus-image" style={{visibility: lastIndex(index) ? 'hidden' : 'visible'}} 
                    src={BulletPoint} alt="plus sign indicating another recent work" />

            </div>
            
            )}

        </ul>
    </div>
    
    )
}

export default RecentWork;