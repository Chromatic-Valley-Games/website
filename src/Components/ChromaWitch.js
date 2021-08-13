import { Grid, Box, Typography } from '@material-ui/core';
import Chroma from '../Images/Founders/Chroma.png'
import { useStyles } from '../Styles/styles';

export default function ChromaWitch() {
    const classes = useStyles();
    return (
        <Box mx="5vmin" my="30vh">
        <Grid container spacing={3}>

          <Grid container item xs={12} md={6}>
            <img src={Chroma} alt="Chroma" className={classes.images} />
          </Grid>

          <Grid 
            container  
            item 
            xs={12} md={6} 
            className={ classes.remarginalize }
            direction="column"
            >

            <Typography align="left" variant="h5" className={classes.paragraph}>
                ChromaWitch
            </Typography>

            <Typography align="left" variant="body1" className={classes.paragraph}>
              "I was three when I first played Mario, and four when I became too good at it to play with my parents. A pattern developed when I was a child where I would get a new game console every other Christmas. After playing Jak II, Naughty Dog became my favorite game studio, and Playstation my favorite console. I'm more of a PC player these days, but I still support Playstation and play their exclusives. I studied 3D Art and Animation in college, and working at a game studio was always the goal. Still, it wasn't until 2017 when that passion truly struck me. After 100 percenting Horizon: Zero Dawn, I cried because I didn't want the story to be over. That was when I realized, "I want to craft an experience like that." I haven't stopped fighting for that since.⠀
⠀             <br/> <br/>
              The community and "small team with a big passion" environment of Chromatic Valley has been a joy to work in so far. It's always a pleasure working with talented and hard-working people, and we're full of those. I love helping to keep everything moving and on track as we move forward as a company. So far, we all see value in one another, and that's a beautiful thing."
            </Typography>

          </Grid>

        </Grid>
      </Box>
    );
}