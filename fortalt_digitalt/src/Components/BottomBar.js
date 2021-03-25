import React from "react";
import { useTranslation } from 'react-i18next';

// Components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'fixed',
        justifyContent: 'center',
        bottom: 0,
        marginBottom: theme.spacing(2),
        opacity: '50%',
        width: '100%'
    }
}));

function BottomBar() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <Box className={classes.root}>
            <Typography variant="body1">
                {new Date().getFullYear()} Copyright: {t('Group')} 4,  
                <Link color="inherit" href="https://www.ntnu.no/eit/eit3014"> EiT </Link>
            </Typography>
        </Box>
    );
}

export default BottomBar;