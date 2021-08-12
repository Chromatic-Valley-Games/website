import { createTheme } from "@material-ui/core";

const blackTheme = createTheme();
blackTheme.typography.h3 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '2.5rem',
    },
    [blackTheme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
};
blackTheme.palette.text.primary = "#DDDDDD";
blackTheme.palette.secondary.main = "#141619";

export default blackTheme;