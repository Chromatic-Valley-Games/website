import { Box, Typography, Button, ThemeProvider } from '@material-ui/core';
import blackTheme from '../Styles/blackTheme';
import { gamePresentation } from '../Styles/styles';


export default function FreshFight() {
    const classes = gamePresentation();
    return(
        <ThemeProvider theme={blackTheme}>
            <Box bgcolor="secondary.main">
                <Box pt="30vh">
                    <Typography align="center" variant="h3" color="textPrimary" gutterBottom>
                        Fresh Fight
                    </Typography>
                </Box>

                <Box pb="10vmin" pt="5vmin">
                    <Typography 
                        align="center" 
                        variant="body1" 
                        color="textPrimary" 
                        paragraph 
                        gutterBottom
                        className={classes.paragraph}
                    >
                        <em> A cook at a restaurant attempts to create the perfect meal for their customers using the hordes of food monsters frolicking behind the scenes. Every kitchen utensil around you can be used as a weapon, each with its own effectiveness against particular monsters. As you fight the horde, more is revealed about where they come from, who controls them, and even stronger opponents that expose the truth about this restaurant. Are you just a lowly cook trying to get by, or is there something more sinister going on?</em>
                    </Typography>
                </Box>
                <Box pb="35vh">
                    <Button href="https://chromaticvalley.itch.io/fresh-fight" variant="contained" color="primary">
                        Play Now
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
