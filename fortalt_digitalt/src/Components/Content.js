import React from "react";
import { useTranslation } from "react-i18next";
import { useAsync, IfFulfilled } from "react-async"

// Common
import { getWeatherType } from "../Common/weather";

// Components
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Options from "./Options";
import Suggestion from "./Suggestion";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

// Styling
import { makeStyles } from "@material-ui/core/styles";

// Data
import Data from "../data.json";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  unselectable: {
    userSelect: 'none'
  },
  switch_track: {
    backgroundColor: theme.palette.secondary.main
  },
  switch_base: {
    color: theme.palette.secondary.main
  }
}));

function Content() {
  const classes = useStyles();
  const state = useAsync({ promiseFn: getWeatherType});
  const [choice, setChoice] = React.useState('choiceOne');
  const [when, setWhen] = React.useState(true);
  const { t, i18n } = useTranslation();
  const data = Data;

  const reDoQuestion = () => {
    if (('parent' in data[choice])) {
      setChoice(data[choice]['parent'])
    }
  };

  const handleChange = () => {
    setWhen(!when);
    setChoice('choiceOne');
  };
  
  return (
    <Card className={classes.root}>
      {choice in data && (
        <>
          <CardHeader
            action={
              data[choice].parent && (
                <Hidden xsDown>
                  <Tooltip title={t('BackTooltip')}>
                    <IconButton edge="end" color="secondary" onClick={reDoQuestion} >
                      <ArrowBackIcon />
                    </IconButton>
                  </Tooltip>
                </Hidden>
              )
            }
            title={t(data[choice]['question'])}
          />
          <CardContent>
            {data[choice].options && (
              <IfFulfilled state={state}>
                {weather => (
                  <Options
                    data={data[choice]}
                    setChoice={setChoice}
                    weather={weather}
                    when={when}
                  />
                )}
              </IfFulfilled>
            )}
            {data[choice].text && (
              <Suggestion 
                data={data[choice]}
              />
            )}
          </CardContent>
          <CardActions disableSpacing>
            <Grid container direction="column" alignItems="center" spacing={1}>
            {data[choice].options && (
              <Grid item>
                <FormGroup>
                  <Typography component="div">
                    <Grid component="label" container alignItems="center" spacing={1} className={classes.unselectable}>
                      <Grid item>{t("ChoiceFuture")}</Grid>
                      <Grid item>
                        <Switch 
                          checked={when} 
                          onChange={handleChange}   
                          classes={{
                            track: classes.switch_track,
                            switchBase: classes.switch_base,
                          }}
                        />
                      </Grid>
                      <Grid item>{t("ChoiceToday")}</Grid>
                    </Grid>
                  </Typography>
                </FormGroup>
              </Grid>
              )}
              {data[choice].parent && (
                <Hidden smUp>
                  <Grid item>
                      <Tooltip title={t('BackTooltip')}>
                        <IconButton edge="end" color="secondary" onClick={reDoQuestion} >
                          <ArrowBackIcon />
                        </IconButton>
                      </Tooltip>
                  </Grid>
                </Hidden>
              )}
            </Grid>
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default Content;