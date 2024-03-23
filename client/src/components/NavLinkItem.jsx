import React from 'react';
import NavLinks from "./NavLink";

const NavLinkItem = ({ svg, text, link, setChatLog }) => {
    return (
        <NavLinks
            svg={svg}
            text={text}
            link={link}
            setChatLog={setChatLog}
        />
    );
};

export default NavLinkItem;
