import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    images: {
        width: "80vmin",
        margin: "auto",
        [theme.breakpoints.up('md')]: {
        },
    },

    paragraph: {
        width: "80vmin",
            margin: "auto",
        [theme.breakpoints.up('md')]: {
            marginLeft: "15vmin",
            
        }
    },

    footerLogo: {
        height: "10vmin",
    },

    blackTheme: {
        backgroundColor: "#141619",
        Color: "white",
    },

    blackThemeColor: {
        Color: "white",
    }
}));

