import React from "react";
import { useTranslation } from "react-i18next";

// Common
import isDay from "../Common/time";
//import getNearbyRestaurants from "../Common/maps";

// Components
import { Box, Grid } from "@material-ui/core";
import Title from "./TopBar";
import Content from "./Content";
import DynamicIcons from "./DynamicIcons";
import Footer from "./BottomBar";

// Styling
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../Styling/themes";

const theme = getTimeTheme();

function getTimeTheme() {
  if (isDay()) {
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
      <Title />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h1>{t("Welcome1")}</h1>
          <p>{t("Welcome2")}</p>
        </Grid>
        <Grid item zeroMinWidth>
          <Box width={800}>
            <Content />
          </Box>
        </Grid>
      </Grid>
      <DynamicIcons />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
