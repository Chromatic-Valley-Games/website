import Typography from '@material-ui/core/Typography';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function IntroText() {
    const classes = useStyles();
    const theme = createTheme();
    theme.typography.h3 = {
        fontSize: '2rem',
        '@media (min-width:600px)': {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
    };
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Typography align="left" variant="h3" gutterBottom>
                    Welcome to <br/> Chromatic Valley
                </Typography>

                <Typography align="left" variant="overline" display="block" gutterBottom>
                    Multinational video game studio. Established 2021.
                </Typography>
            </ThemeProvider>
        </div>
        

        
    );
}