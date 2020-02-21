//React
import React from 'react';
import { Link } from 'react-router-dom'

//imports
import { handleWidth, handleHeight } from '../methods/dimensions';

const WorkImageCard = (props) => {

    const {title, image, company} = props;
    
    return (
        
    <>

        <Link to={`home/${company}`}>

            <div className="screengrab">

                <h3>{title}</h3>
                <img id="photo" src={image.src} 
                    alt={`Screen Shot from video of ${title}`} style={{width: '250px', objectFit: 'cover'}} />

            </div>

        </Link>

    </>
    )
}

export default WorkImageCard;