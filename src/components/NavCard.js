import React from 'react';
import { NavLink } from 'react-router-dom';

const NavCard = ({item, id, handleHover, hoverSelect }) => {

    const activeNavLink = {borderBottom: '1px solid black', paddingBottom: '1px'};

    const navLinkConditional = (item) => {
        return item === 'MOTEL HOME' || !item ? '/home' : `/${item.replace(' ', '-').toLowerCase()}`
    }

    return (

        <>

            <NavLink to={() => navLinkConditional(item)} activeStyle={activeNavLink}>
                <li id={id} onClick={() => handleHover(item)}>{item}</li>
            </NavLink>

            {/* div to keep banner measurements constant */}
            
            <div></div>
         
        </>

    )
}

export default NavCard;