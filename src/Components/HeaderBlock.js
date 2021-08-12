import '../App.css';
import { Divider, Box } from '@material-ui/core';
import Navbar from '../Navbar';
import logo from '../Images/chromatic-valley-2.png'


export default function HeaderBlock() {
    return(
        <Box>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar />
            </header>
            <Divider variant="fullWidth"/>
        </Box>
    ); 
}