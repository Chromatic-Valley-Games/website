import IntroText from './IntroText';
import { Grid, Box } from '@material-ui/core';

export default function IntroBlock() {
    return(
        <Box py="30vmin" mx="10vmin">
            <Grid container spacing={1}>
            <Grid container item xs={12} md={4}>
                <IntroText />
            </Grid>
            <Grid container item xs={12} md={4}>
            </Grid>
            </Grid>
        </Box>
    );
}
