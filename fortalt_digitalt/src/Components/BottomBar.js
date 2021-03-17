import React from "react";
import { useTranslation } from 'react-i18next';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'fixed',
        justifyContent: 'center',
        bottom: 0,
        marginBottom: theme.spacing(2),
        opacity: '50%',
        width: '100%'
    },
    link: {
        color: theme.palette.primary.contrastText,
        textDecoration: 'none'
    }
}));

function Footer() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.root}>
            <a>{new Date().getFullYear()} Copyright: {t('Group')} 4, <a href="https://www.ntnu.no/eit/eit3014" className={classes.link}> EiT </a></a>
        </div>
    );
}

export default Footer;