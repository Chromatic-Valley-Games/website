import { Box, Typography, Button, ThemeProvider, Grid } from '@material-ui/core';

export default function Zeitergeist() {
    return(
            <Box>
                <Box pt="10vmin">
                    <Typography align="center" variant="h3" gutterBottom>
                        Zeitergeist
                    </Typography>
                </Box>

                <Box pb="10vmin" pt="5vmin">
                    <Grid container >
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <Typography align="center" variant="body1" paragraph gutterBottom>
                            Zeitgeist - a First Person Narrative Horror game that follows Sarah Hess, a private detective called to investigate a location she has a personal history with, cursed with an entity that causes a tragic end to its occupants. Sarah must use her psychometric powers to travel through the mansion’s timeline, explore the ever changing architecture, and understand its connection to her own past to discover the reason for the disturbing entity that haunts it.
                            </Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Box>
                <Box pb="10vmin">
                    <Typography align="center" variant="h3" gutterBottom>
                        Coming Soon
                    </Typography>
                </Box>
            </Box>
    );
};
