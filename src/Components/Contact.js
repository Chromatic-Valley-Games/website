import { Typography, Box } from "@material-ui/core";


export default function Contact() {
    return(
        <Box pb="10vmin" pt="40vh">
            <Typography variant="h5">
                Contact us at
            </Typography>
            <Typography variant="body1">
                chroma@chromaticvalley.com
                <br/>
                social@chromaticvalley.com
            </Typography>
        </Box>
    );
}