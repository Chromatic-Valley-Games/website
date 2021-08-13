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

    remarginalize: {
        margin: "auto",
    }
}));

export const gamePresentation = makeStyles((theme) => ({
    paragraph: {
        paddingLeft: "4vmin",
        paddingRight: "4vmin",
        [theme.breakpoints.up('sm')]: {
            width: "50%",
            margin: "auto",
        },
    }
}));

export const navLogo = makeStyles((theme) => ({
    logo: {
        height: "3vmin",
        width: "3vmin",
    },
}));
