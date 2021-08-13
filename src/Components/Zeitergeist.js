import { Box, Typography } from '@material-ui/core';
import { gamePresentation } from '../Styles/styles';

export default function Zeitergeist() {
    const classes = gamePresentation();

    return(
        <Box>
            <Box pt="30vh">
                <Typography align="center" variant="h3" gutterBottom>
                    Zeitergeist
                </Typography>
            </Box>

            <Box pb="10vmin" pt="5vmin">
                <Typography 
                    align="center" 
                    variant="body1" 
                    paragraph 
                    gutterBottom
                    className={classes.paragraph}
                >
                    Zeitgeist - a First Person Narrative Horror game that follows Sarah Hess, a private detective called to investigate a location she has a personal history with, cursed with an entity that causes a tragic end to its occupants. Sarah must use her psychometric powers to travel through the mansion’s timeline, explore the ever changing architecture, and understand its connection to her own past to discover the reason for the disturbing entity that haunts it.
                </Typography>
            </Box>
            <Box pb="35vh">
                <Typography align="center" variant="h3" gutterBottom>
                    Coming Soon
                </Typography>
            </Box>
        </Box>
    );
};
