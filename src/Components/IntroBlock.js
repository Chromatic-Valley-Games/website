import IntroText from './IntroText';
import { Grid, Box, Fade } from '@material-ui/core';

export default function IntroBlock() {

    return(
        <Fade in timeout={2000}>
            <Box pt="30vh" pb="30vh" mx="10vmin">
                <Grid container spacing={1}>
                <Grid container item xs={12} md={4}>
                    <IntroText />
                </Grid>
                <Grid container item xs={12} md={4}>
                </Grid>
                </Grid>
            </Box>
        </Fade>
    );
}
