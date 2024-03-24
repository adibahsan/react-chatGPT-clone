import React from 'react';
import NavLinkItem from './NavLinkItem';
import {svgClearChat, svgLogout} from "./util/svgs";

const NavLinksContainer = ({chatLog, setChatLog}) => {
    return (
        <div className="navLinks" style={{position: "absolute", bottom: "10px"}}>
            {chatLog.length > 0 && (
                <NavLinkItem
                    svg={svgClearChat}
                    text="Clear Conversations"
                    setChatLog={setChatLog}
                />
            )}
            <NavLinkItem
                svg={svgLogout}
                text="Log out"
                link=""
            />
        </div>
    );
};

export default NavLinksContainer;
