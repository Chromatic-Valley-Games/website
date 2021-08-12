import { Typography, Box } from "@material-ui/core";


export default function Contact() {
    return(
        <Box pb="10vmin">
            <Typography variant="h5">
                Contact us at
            </Typography>
            <Typography variant="Body1">
                chroma@chromaticvalley.com
                <br/>
                social@chromaticvalley.com
            </Typography>
        </Box>
    );
}