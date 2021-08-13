import { BottomNavigation, BottomNavigationAction, ThemeProvider } from "@material-ui/core";
import InstagramLogo from "./Images/InstagramLogo";
import GamePadLogo from "./Images/GamePadLogo";
import TwitchLogo from "./Images/TwitchLogo";
import TwitterLogo from "./Images/TwitterLogo";
import TiktokLogo from "./Images/TiktokLogo";

import { navTheme } from "./Styles/navTheme";

function Navbar() {
    return (

        <ThemeProvider theme={ navTheme }>
            <BottomNavigation>
                <BottomNavigationAction label="Instagram" value="Instagram" icon={<InstagramLogo />} />
                <BottomNavigationAction label="Twitter" value="Twitter" icon={<TwitterLogo />} />
                <BottomNavigationAction label="Twitch" value="Twitch" icon={<TwitchLogo />} />
                <BottomNavigationAction label="Tiktok" value="Tiktok" icon={<TiktokLogo />} />
                <BottomNavigationAction label="Games" value="Games" icon={<GamePadLogo />} />
            </BottomNavigation>
        </ThemeProvider>
    );
}

export default Navbar;