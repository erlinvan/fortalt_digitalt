import React from "react";
import { useTranslation } from "react-i18next";
import { useAsync, IfFulfilled } from "react-async"

// Common
import { getWeatherType } from "../Common/weather";

// Components
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

  const handleChange = (event) => {
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
                <Tooltip title={t('BackTooltip')}>
                  <IconButton edge="end" color="secondary" onClick={reDoQuestion} >
                    <ArrowBackIcon />
                  </IconButton>
                </Tooltip>
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
          {data[choice].options && (
            <CardActions disableSpacing>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                <FormGroup>
                  <Typography component="div">
                    <Grid component="label" container alignItems="center" spacing={1}>
                      <Grid item>{t("ChoiceTomorrow")}</Grid>
                      <Grid item>
                        <Switch checked={when} onChange={handleChange} />
                      </Grid>
                      <Grid item>{t("ChoiceToday")}</Grid>
                    </Grid>
                  </Typography>
                </FormGroup>
                </Grid>
              </Grid>
            </CardActions>
          )}
        </>
      )}
    </Card>
  );
}

export default Content;

// LEGG ALT DETTE INN I JSON FILEN

/*
{choiceOne === "Nå!" && choiceTwo === "" && (
  <QuestionsAndOptions
    choice={choiceTwo}
    setChoice={setChoiceTwo}
    data={data.choiceOne}
  ></QuestionsAndOptions>
)}
{choiceOne === "Planlegge til senere" && choiceTwo === "" && (
  <QuestionsAndOptions
    choice={choiceTwo}
    setChoice={setChoiceTwo}
    data={data.choiceOne}
  ></QuestionsAndOptions>
)}
{choiceTwo === "Tur" && choiceThree === "" && (
  <QuestionsAndOptions
    choice={choiceThree}
    setChoice={setChoiceThree}
    data={data.turValg}
  ></QuestionsAndOptions>
)}
{choiceOne === "Nå!" &&
  choiceTwo === "Tur" &&
  choiceThree === "Kort" && (
    <Suggestion suggestion={data.kortTurForslag} />
  )}

{choiceTwo === "Spise ute" && choiceThree === "" && (
  <QuestionsAndOptions
    choice={choiceThree}
    setChoice={setChoiceThree}
    data={data.spisesteder}
  ></QuestionsAndOptions>
)}
{choiceTwo === "Spise ute" && choiceThree === "Byens billigste øl!" && (
  <h4> Superhero Pizza og Samfundet</h4>
)}
{choiceTwo === "Spise ute" &&
  choiceThree === "Fancy, men rimelig mat" && (
    <h4> Edoramen og Le Bistro</h4>
  )}
{choiceTwo === "Spise ute" && choiceThree === "Bar med aktiviteter" && (
  <h4> Trondheim Camping og Work-Work</h4>
)}

{choiceTwo === "Kulturopplevelser" && choiceThree === "" && (
  <QuestionsAndOptions
    choice={choiceThree}
    setChoice={setChoiceThree}
    data={data.kultur}
  ></QuestionsAndOptions>
)}
{choiceTwo === "Kulturopplevelser" && choiceThree === "Museum" && (
  <h4> Ringve og Rockheim</h4>
)}
{choiceTwo === "Kulturopplevelser" &&
  choiceThree === "Historiske steder" && <h4> Historisk tur? </h4>}
{choiceTwo === "Kulturopplevelser" &&
  choiceThree === "Noe utenom det vanlige" && <h4> idk </h4>}

{choiceOne === "Planlegge til senere" &&
  choiceTwo === "Sport" &&
  choiceThree === "" && (
    <QuestionsAndOptions
      choice={choiceThree}
      setChoice={setChoiceThree}
      data={data.sport}
    ></QuestionsAndOptions>
  )}
{choiceOne === "Nå!" && choiceTwo === "Sport" && choiceThree === "" && (
  <QuestionsAndOptions
    choice={choiceThree}
    setChoice={setChoiceThree}
    data={data.sport2}
  ></QuestionsAndOptions>
)}
{choiceTwo === "Sport" && choiceThree === "NTNU Idrett" && (
  <h4> Her kommer info om NTNUI</h4>
)}
{choiceTwo === "Sport" && choiceThree === "Ski" && (
  <h4> Noen fine skiturer om vinteren </h4>
)}
{choiceTwo === "Sport" && choiceThree === "Diskgolf" && (
  <h4> Peker ut diskgolfbaner! </h4>
)}
{choiceTwo === "Sport" && choiceThree === "Golf" && (
  <h4> Billig golfmedlemskap </h4>
)}
{choiceTwo === "Sport" && choiceThree === "Pirbadet" && (
  <h4> Pirbadet info </h4>
)}*/