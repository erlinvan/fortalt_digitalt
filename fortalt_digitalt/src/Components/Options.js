import React from "react";
import { useTranslation } from "react-i18next";

// Common
import {getTimeType, getSeason } from "../Common/time";

// Components
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

// Styling
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
    },
  },
  text: {
    overflowWrap: 'break-word'
  },
  unselectable: {
    userSelect: 'none'
  },
}));

const ChoiceOne = ({ data, setChoice, weather, when }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    if (event.currentTarget.id !== "") {
      setChoice(event.currentTarget.id);
    }
  };

  const renderOption = (key, num) => {
    let id = data['options'][key];

    // Check object requirements if there are any
    if (typeof id === 'object') {
      const requirements = id.requires;

      if (when === true) {
        if (requirements.weather && requirements.weather != weather) {
          return "";
        }

        if (requirements.when && requirements.when !== "now") {
          return "";
        }

        if (requirements.time && !requirements.time.split(",").includes(getTimeType())) {
          return "";
        }

        if (requirements.season && !requirements.season.split(",").includes(getSeason())) {
          return "";
        }
      }

      id = id.id;
    }

    // If requirements are met, render
    return (          
      <Grid item 
        xs={12} 
        sm={3} 
        key={id + num}
        id={id}
        onClick={handleChange}
        zeroMinWidth
        className={classes.unselectable}
      >
        <motion.div whileHover={{ scale: 0.8 }}>
          <Paper
            elevation={2}
            className={classes.paper}
          >
            <Typography variant="body1" className={classes.text}>{t(key)}</Typography>
          </Paper>
        </motion.div>
      </Grid>
    );
  }

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      {'options' in data && Object.keys(data['options']).map((key, num) => (
        renderOption(key, num)
      ))}
    </Grid>
  );
};

export default ChoiceOne;
