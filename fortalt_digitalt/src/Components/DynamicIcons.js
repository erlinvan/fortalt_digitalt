import React from "react";
import { useTranslation } from "react-i18next";
import { useAsync, IfFulfilled } from "react-async"

// Common
import isDay from "../Common/time";
import { getWeatherIcon } from "../Common/weather";

// Components
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

// Styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: '2%',
        bottom: '3%'
    },
    weatherimg: {
        width: '32px'
    }
}));

function DynamicIcons() {
    const classes = useStyles();
    const state = useAsync({ promiseFn: getWeatherIcon});
    const { t, i18n } = useTranslation();

    return (
        <Box className={classes.root}>
            <Tooltip title={t('TimeTooltip')}>
                {isDay() ? 
                    <img src="icons/time/sun.png" />
                :
                    <img src="icons/time/moon.png" />
                }
            </Tooltip>
            <IfFulfilled state={state}>
                {weather => (
                    <Tooltip title={t('WeatherTooltip')}>
                        <img src={"icons/weather/" + weather + ".png"} className={classes.weatherimg} />
                    </Tooltip>
                )}
            </IfFulfilled>
        </Box>
    );
}

export default DynamicIcons;