import React from 'react';
import NavLinkItem from './NavLinkItem';
import BuyMeACoffeeButton from './BuyMeACoffeeButton';
import {svgClearChat, svgDiscord, svgFaq, svgLogout} from "./util/svgs";

const NavLinksContainer = ({ chatLog, setChatLog }) => {
    return (
        <div className="navLinks" style={{ position: "absolute", bottom: "10px" }}>
            {chatLog.length > 0 && (
                <NavLinkItem
                    svg= {svgClearChat}
                    text="Clear Conversations"
                    setChatLog={setChatLog}
                />
            )}
            {/*<NavLinkItem*/}
            {/*    svg={svgDiscord}*/}
            {/*    text="OpenAI Discord"*/}
            {/*    link="https://discord.com/invite/openai"*/}
            {/*/>*/}
            {/*<NavLinkItem*/}
            {/*    svg= {svgFaq}*/}
            {/*    text="Updates & FAQ"*/}
            {/*    link="https://help.openai.com/en/collections/3742473-chatgpt"*/}
            {/*/>*/}
            <NavLinkItem
                svg={svgLogout}
                text="Log out"
                link=""
            />
        </div>
    );
};

export default NavLinksContainer;
