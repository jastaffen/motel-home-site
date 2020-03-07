import React, { useState } from 'react';

import NavCard from '../components/NavCard';

const navBar = ['Motel Home', 'About'];

const BannerContainer = () => {

    const [hoverSelect, setHoverSelect] = useState('');

    const handleHover = (item) => {
        setHoverSelect(item)
    }


    

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