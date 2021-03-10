import React from "react";

// Common
import isDay from "../Common/time";

// Components
import { Grid } from "@material-ui/core";
import Title from "./TopBar";
import Toggle from "./Toggle";

// Styling
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from "../Styling/themes"

const theme = getTimeTheme()

function getTimeTheme() {
  if (isDay()) {
    return createMuiTheme(lightTheme);
  }
  else {
    return createMuiTheme(darkTheme); 
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Title />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h1>Hei!</h1>
          <p>Her kan du finne forslag til nye ting å gjøre</p>
        </Grid>
        <Grid item>
          <Toggle />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;