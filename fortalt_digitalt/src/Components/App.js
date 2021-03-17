import React from "react";
import { useTranslation } from 'react-i18next';

// Common
import isDay from "../Common/time";

// Components
import { Grid } from "@material-ui/core";
import Title from "./TopBar";
import QuestionsAndOptions from "./QuestionAndOptions";

// Styling
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../Styling/themes";

// Data
import Data from "../data.json";

const theme = getTimeTheme();

function getTimeTheme() {
  if (isDay()) {
    return createMuiTheme(lightTheme);
  } else {
    return createMuiTheme(darkTheme);
  }
}

function App() {
  const [choiceOne, setChoiceOne] = React.useState("");
  const [choiceTwo, setChoiceTwo] = React.useState("");
  const {t, i18n} = useTranslation();

  console.log(choiceOne);
  const data = Data;
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Title />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h1>{t('Welcome1')}</h1>
          <p>{t('Welcome2')}</p>
        </Grid>
        <Grid item>
          {choiceOne === "" ? (
            <QuestionsAndOptions
              choiceOne={choiceOne}
              setChoiceOne={setChoiceOne}
              data={data.choiceTwo}
            ></QuestionsAndOptions>
          ) : (
            <h3> du har valgt {choiceOne}</h3>
          )}
        </Grid>
      </Grid>
      <div />
    </ThemeProvider>
  );
}

export default App;
