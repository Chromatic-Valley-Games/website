import { navLogo } from "../Styles/styles";

function GamePadLogo() {
    const classes = navLogo();
    return (

        <a href="https://chromaticvalley.itch.io/" className={classes.logo}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M34 35v-7a7 7 0 017-7h5a10 10 0 0010-10V3a2 2 0 10-4 0v8a6 6 0 01-6 6h-5a11 11 0 00-11 11v7H2v28h60V35zM20 51h-4v4h-4v-4H8v-4h4v-4h4v4h4zm28-11a3 3 0 11-3 3 3 3 0 013-3zm-6 12a3 3 0 113-3 3 3 0 01-3 3zm6 6a3 3 0 113-3 3 3 0 01-3 3zm6-6a3 3 0 113-3 3 3 0 01-3 3z" fill="#202020"/></svg>
        </a>
    );
}

export default GamePadLogo;