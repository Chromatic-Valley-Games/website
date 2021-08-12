import { Box, Typography, Button, ThemeProvider, Grid } from '@material-ui/core';
import blackTheme from '../Styles/blackTheme';

export default function FreshFight() {
    return(
        <ThemeProvider theme={blackTheme}>
            <Box bgcolor="secondary.main">
                <Box pt="10vmin">
                    <Typography align="center" variant="h3" color="textPrimary" gutterBottom>
                        Fresh Fight
                    </Typography>
                </Box>

                <Box pb="10vmin" pt="5vmin">
                    <Grid container >
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <Typography align="center" variant="body1" color="textPrimary" paragraph gutterBottom>
                               <em> A cook at a restaurant attempts to create the perfect meal for their customers using the hordes of food monsters frolicking behind the scenes. Every kitchen utensil around you can be used as a weapon, each with its own effectiveness against particular monsters. As you fight the horde, more is revealed about where they come from, who controls them, and even stronger opponents that expose the truth about this restaurant. Are you just a lowly cook trying to get by, or is there something more sinister going on?</em>
                            </Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Box>
                <Box pb="10vmin">
                    <Button href="https://chromaticvalley.itch.io/fresh-fight" variant="contained" color="primary">
                        Play Now
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
