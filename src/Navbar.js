import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import InstagramLogo from "./Images/InstagramLogo";
import GamePadLogo from "./Images/GamePadLogo";
import TwitchLogo from "./Images/TwitchLogo";
import TwitterLogo from "./Images/TwitterLogo";
import TiktokLogo from "./Images/TiktokLogo";

import './Images/logo.css'

function Navbar() {
    return (
        <BottomNavigation className="Logo-Zone">
            <BottomNavigationAction label="Recents" value="recents" icon={<InstagramLogo />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<TwitterLogo />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<TwitchLogo />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<TiktokLogo />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<GamePadLogo />} />
        </BottomNavigation>
    );
}

export default Navbar;