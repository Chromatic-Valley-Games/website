import { Grid, Box, Typography } from '@material-ui/core';
import Chris from '../Images/Founders/Chris.png'
import { useStyles } from '../Styles/imageStyle';


export default function ShadowChris() {
  const classes = useStyles();
    return (
        <Box mx="5vmin" py="15vmin">
        <Grid container spacing={4}>
        <Grid container item xs={12} md={6} >
            <img src={Chris} alt="Chris" className={classes.images} />
          </Grid>
          <Grid container item xs={12} md={6}>
            <Typography align="left" variant="h5" className={classes.paragraph}>
                ShadowChris
            </Typography>

            <Typography align="left" variant="body1"className={classes.paragraph} >
            "My love for gaming goes back as far as I can remember. I mean, I've been gaming since before I could even do multiplication, so a fair bit of time there. With all that time spent, I've got a serious passion for gaming and the feeling it gives me. Just being able to lose my mind for an hour while jumping into another world is one of the best feelings in the world to me. ⠀
⠀           <br/> <br/>
I grew up in Sydney, Australia, but I've always called the internet and games home. Whenever I'm bored, something there always draws me in and gives me that spark. If I'm feeling down, disappearing into a game flips my mood back. Whenever I'm happy, the feeling of playing enhances it further. That's why I'm so thrilled with the community we've built at Chromatic Valley in such a short time. When we first came together for the game jam, I hoped to find some like-minded people to work with. But I never could have expected to find such a passionate and accepting group, not even in my wildest Chromatic Valley of dreams!”
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
}