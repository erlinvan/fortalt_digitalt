import React from "react";
import { useTranslation } from 'react-i18next';

// Common
import getRandomEmoji from "../Common/emoji";

// Components
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from "framer-motion";
import Tooltip from '@material-ui/core/Tooltip';

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
        marginLeft: theme.spacing(2)
    },
    logo: {
        marginLeft: theme.spacing(2),
        display: 'flex'
    },
    logoimg: {
        borderRadius: 0,
        userDrag: 'none',
        width: '35px',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:active': {
            cursor: 'grabbing'
        }
    },
    logoemoji: {
        pointerEvents: 'none',
        position: 'relative',
        top: '8px',
        right: '50%'
    }
}));

function TopBar() {
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
        <AppBar position="fixed">
            <Toolbar>
                <Tooltip title={t('DragTooltip')}>
                    <motion.div drag
                        dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        }} 
                        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                        whileTap={{ scale: 0.8 }} 
                        className={classes.logo}
                    >
                        <img src="logo.png" className={classes.logoimg}/>
                        <a className={classes.logoemoji}>{getRandomEmoji()}</a>
                    </motion.div>
                </Tooltip>
                <Box className={classes.title}>
                    <Hidden xsDown>
                        <Typography variant="h6">
                            {t('Title')}
                        </Typography>
                    </Hidden>
                </Box>
                <Tooltip title={t('LangTooltip')}>
                    <IconButton edge="start" onClick={handleClick} className={classes.button} color="inherit" aria-controls="simple-menu" aria-haspopup="true">
                        <LanguageIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={t('HomeTooltip')}>
                    <IconButton edge="start" onClick={refreshPage} className={classes.button} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                </Tooltip>
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

export default TopBar;