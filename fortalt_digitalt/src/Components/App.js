import React from "react";
import { useTranslation } from "react-i18next";

// Common
import isDay from "../Common/time";
//import getNearbyRestaurants from "../Common/maps";

// Components
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import TopBar from "./TopBar";
import Content from "./Content";
import DynamicIcons from "./DynamicIcons";
import BottomBar from "./BottomBar";
import Typography from '@material-ui/core/Typography';

// Styling
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../Styling/themes";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  grid: {
    width: '100%'
  },
  content: {
    width: '100%',
    maxWidth: '1000px'
  },
  unselectable: {
    userSelect: 'none'
  }
}));

function getTheme() {
  const chosenTheme = localStorage.getItem('theme');

  if (!chosenTheme) {
    localStorage.setItem('theme', 'light');
    return lightTheme;
  }

  return (chosenTheme === 'light') ? lightTheme : darkTheme;
}

function App() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = React.useState(getTheme());
  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <TopBar 
        theme={theme}
        setTheme={setTheme} 
      />
      <div className={classes.toolbar} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <Grid container direction="column" alignItems="center" spacing={4} className={classes.grid}>
          <Grid item>
            <Typography variant="h3">{t('Welcome1')}</Typography>
            <Typography variant="body1">{t('Welcome2')}</Typography>
          </Grid>
          <Grid item zeroMinWidth className={classes.content}>
              <Content />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.unselectable}>
        <DynamicIcons />
        <BottomBar />
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
