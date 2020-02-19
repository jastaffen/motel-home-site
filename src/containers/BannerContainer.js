import React, { useState, useEffect } from 'react';


import LogoImage from '../images/motelhomelogo.png';

import NavCard from '../components/NavCard';

const navBar = ['Motel Home', 'About'];

const BannerContainer = () => {

    const [loading, setLoading] = useState(false);
    const [logoImage, setLogoImage] = useState(null);
    const [hoverSelect, setHoverSelect] = useState('');

    const handleHover = (item) => {
        setHoverSelect(item)
    }

    useEffect(() => {
        setLoading(true);
        setLogoImage(LogoImage);
        setLoading(false);
    }, []);

    

    const renderNavBar = () => {
        return navBar.map((item, index) => <NavCard key={index} id={index} item={item.toUpperCase()} handleHover={handleHover} hoverSelect={hoverSelect} />)
    }

    return(
        
        <div className="banner-container">
        
                <ul className='banner-list'>
                    {renderNavBar()}
                </ul>
            
        </div>
    )
}

export default BannerContainer;