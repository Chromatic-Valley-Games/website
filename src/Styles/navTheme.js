import { createTheme } from "@material-ui/core";




export const navTheme = createTheme();

// if i didn override this, it was too big for mobile screens
// causing overflow over width
navTheme.overrides.MuiBottomNavigationAction = {
    root: {
        [navTheme.breakpoints.down("sm")]: {
            minWidth: 45,
            width: "3vmin",
        }
    }
}