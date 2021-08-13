import { Box, Divider, Grid, Typography } from '@material-ui/core';
import logo from '../Images/chromatic-valley-2.png'
import { useStyles } from '../Styles/styles';

export default function Footer() {
    const classes = useStyles();
    return(
        <Box>
            <Divider/>
            <Box py="5vmin">
                <Grid container direction="column">
                    <Grid item>
                        <img src={logo} alt="logo-footer" className={classes.footerLogo}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">
                            ©2021 Chromatic Valley
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    );
}