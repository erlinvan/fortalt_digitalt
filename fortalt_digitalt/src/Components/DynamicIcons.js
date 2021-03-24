import React from "react";
import { useAsync, IfFulfilled } from "react-async"

// Styling
import { makeStyles } from '@material-ui/core/styles';
import isDay from "../Common/time";
import getWeather from "../Common/weather";

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
    const state = useAsync({ promiseFn: getWeather});
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {isDay() ? 
                <img src="icons/time/sun.png" />
            :
                <img src="icons/time/moon.png" />
            }
            <IfFulfilled state={state}>
                {weather => (
                    <img src={"icons/weather/" + weather + ".png"} className={classes.weatherimg} />
                )}
            </IfFulfilled>
        </div>
    );
}

export default DynamicIcons;