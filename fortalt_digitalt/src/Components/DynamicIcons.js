import React from "react";
import { useTranslation } from "react-i18next";
import { useAsync, IfFulfilled } from "react-async"

// Common
import isDay from "../Common/time";
import { getWeatherIcon } from "../Common/weather";

// Components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';

// Styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: '3%',
        right: '1%'
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
            <Grid container direction="row" spacing={1}>
                <Grid item container justify="center" xs={6} sm={12}>
                    <Tooltip title={t('TimeTooltip')}>
                        {isDay() ? 
                            <img src="icons/time/sun.png" />
                        :
                            <img src="icons/time/moon.png" />
                        }
                    </Tooltip>
                </Grid>
                <Grid item container justify="center" xs={6} sm={12}>
                    <IfFulfilled state={state}>
                        {weather => (
                            <Tooltip title={t('WeatherTooltip')}>
                                <img src={"icons/weather/" + weather + ".png"} className={classes.weatherimg} />
                            </Tooltip>
                        )}
                    </IfFulfilled>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DynamicIcons;