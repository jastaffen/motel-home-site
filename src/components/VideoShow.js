import React, {useEffect, useState} from 'react';

import { useHistory } from 'react-router-dom';

import VideoCard from './VideoCard';

import { videoLinks } from '../constants/videoLinks';

import { useParams } from 'react-router-dom'

const VideoShow = () => {

    let history = useHistory();
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    let { company } = useParams();

    useEffect(() => {
        let videoLink = videoLinks.find(link => link.company === company);
        setSelectedVideo(videoLink);
    }, []);

    const renderVideoCards = () => {
        return <VideoCard videos={selectedVideo} />
    }

    return(

        <div className="video-show test">

        {selectedVideo ? 

            <>
                <button className="vs-back-button"
                onClick={() => history.push("/home")}>X</button>

                <h1 style={{width: '70%'}}>{selectedVideo.title.toUpperCase()}</h1>

                <div>

                    {selectedVideo.video ? 

                        renderVideoCards()
                    
                    : 
                        <iframe title="loading dock" 
                        src="https://giphy.com/embed/ycfHiJV6WZnQDFjSWH" 
                        width="480" height="480" frameBorder="0" 
                        allowFullScreen>
                        </iframe>
                    }

                </div>

                <p>{selectedVideo.jobDescription.toUpperCase()}</p>

                {selectedVideo.description ? 
                    selectedVideo.description.map(desc => <p>{desc}</p>) 
                : null}
                
            </>

            : null}

        </div>

    )
}

export default VideoShow;