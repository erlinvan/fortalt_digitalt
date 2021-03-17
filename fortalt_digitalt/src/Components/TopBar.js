import React from "react";
import { useTranslation } from 'react-i18next';

// Common
import getRandomEmoji from "../Common/emoji";

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
    logo: {
        display: 'flex',
        marginRight: theme.spacing(2)
    },
    logoimg: {
        width: '35px'
    },
    logoemoji: {
        pointerEvents: 'none',
        position: 'relative',
        top: '8px',
        right: '50%'
    }
}));

function Title() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { t, i18n } = useTranslation();

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    
    function handleClose(event) {
        setAnchorEl(null);
    }

    function updateLang(event) {
        const { lang } = event.currentTarget.dataset;
        
        // Handle sneaky people
        if (lang === "no" || lang === "en") {
            i18n.changeLanguage(lang);
        }

        handleClose(event);
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div className={classes.logo}>
                    <img src="logo.png" className={classes.logoimg}/>
                    <a className={classes.logoemoji}>{getRandomEmoji()}</a>
                </div>
                <Typography variant="h6" className={classes.title}>
                    {t('Title')}
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
                <MenuItem onClick={updateLang} data-lang={"no"}>Norsk</MenuItem>
                <MenuItem onClick={updateLang} data-lang={"en"}>English</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Title;