import React from "react";
import { useTranslation } from "react-i18next";

// Common
import isDay from "../Common/time";
//import getNearbyRestaurants from "../Common/maps";

// Components
<<<<<<< HEAD
import { Grid } from "@material-ui/core";
import TopBar from "./TopBar";
=======
import { Box, Grid } from "@material-ui/core";
import Title from "./TopBar";
>>>>>>> 9cc4a15d78ceee6a86e8543453e40db7cf945a29
import Content from "./Content";
import DynamicIcons from "./DynamicIcons";
import BottomBar from "./BottomBar";
import Typography from '@material-ui/core/Typography';

// Styling
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../Styling/themes";

const theme = getTimeTheme();

function getTimeTheme() {
  if (!isDay()) {
    return createMuiTheme(lightTheme);
  } else {
    return createMuiTheme(darkTheme);
  }
}

function App() {
  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h3">{t('Welcome1')}</Typography>
          <Typography variant="body1">{t('Welcome2')}</Typography>
        </Grid>
        <Grid item zeroMinWidth>
          <Box width={800}>
            <Content />
          </Box>
        </Grid>
      </Grid>
      <DynamicIcons />
      <BottomBar />
    </ThemeProvider>
  );
}

export default App;
