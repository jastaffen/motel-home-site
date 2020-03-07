import React, { useState } from 'react';

import forwardArrow from '../images/forward-arrow.png';
import backArrow from '../images/back-arrow.png'

const VideoCard = ({videos}) => {

    
    const [index, setIndex] = useState(0)
    

    const handleBackClick = () => {
        if (index === 0) {
            setIndex(index + 1)
        } else {
            setIndex(index - 1)
        }
    }

    const handleForwardClick = () => {
        if (index < videos.video.length -1) {
            setIndex(index + 1)
        } else {
            setIndex(0);
        }
    }

   
    return(

    <>

        <div className="video-card-container">

            {videos.video.length > 1 ? 
                <button className="carousel" onClick={handleBackClick}>
                    <img src={backArrow} alt="back button for scrolling through videos" />
                </button> 
            : null }


            <iframe title={videos.title}
                src={videos.video[index].src} width={videos.video[index].width}
                height={videos.video[index].height}
                frameBorder={videos.video[index].frameborder}
                className="video test" allow="fullscreen" allowFullScreen>
            </iframe>


            {videos.video.length > 1 ? 
                <button className="carousel" onClick={handleForwardClick}>
                    <img src={forwardArrow} alt="forward button for scrolling videos" width="30px" height="30px" />
                </button>

            : null }

            

        </div>

        {videos.video.length > 1 ?
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {videos.video.map((vid, i) => <div style={i === index ? {fontSize: '25px', opacity: '1'} : {fontSize: '25px', opacity: '0.2'}}>.</div>)}
        </div>
        :
        null
        }
        
    </>
    )
}

export default VideoCard;