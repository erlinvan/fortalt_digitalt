import React from "react";
import Cookies from 'universal-cookie';

// Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';

// Styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function TopBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    
    function handleClose(event) {
        setAnchorEl(null);
    }

    function updateLang(event) {
        const { lang } = event.currentTarget.dataset;
        
        // Handle sneaky people
        if (lang !== "NO" && lang !== "EN") {
            handleClose(event);
            return;
        }
        
        const cookies = new Cookies();
        cookies.set("lang", lang, { path: '/' });

        refreshPage();
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Navn på nettsiden
                </Typography>
                <IconButton edge="start" onClick={handleClick} className={classes.button} color="inherit" aria-controls="simple-menu" aria-haspopup="true">
                    <LanguageIcon />
                </IconButton>
                <IconButton edge="start" onClick={refreshPage} className={classes.button} color="inherit" aria-label="menu">
                    <HomeIcon />
                </IconButton>
            </Toolbar>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={updateLang} data-lang={"NO"}>Norsk</MenuItem>
                <MenuItem onClick={updateLang} data-lang={"EN"}>English</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default TopBar;