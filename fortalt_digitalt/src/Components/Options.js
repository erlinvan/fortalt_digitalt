import React from "react";
import { useTranslation } from "react-i18next";

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
}));

const ChoiceOne = ({ data, setChoice, weather, when }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    if (event.currentTarget.id !== "") {
      setChoice(event.currentTarget.id);
    }
  };

  const renderOption = (key) => {
    let id = data['options'][key];

    // Check object requirements if there are any
    if (typeof id === 'object') {
      const requirements = id.requires;

      if (requirements.weather && requirements.weather != weather) {
        return "";
      }

      if (requirements.when && (requirements.when === "now" ? true : false) != when) {
        return "";
      }

      id = id.id;
    }

    return (          
      <Grid item 
        xs={4} 
        md={4} 
        key={id}
        id={id}
        onClick={handleChange}
      >
        <motion.div whileHover={{ scale: 0.8 }}>
          <Paper
            elevation={2}
            className={classes.paper}
          >
            <Typography variant="body1">{t(key)}</Typography>
          </Paper>
        </motion.div>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} alignItems="center">
      {'options' in data && Object.keys(data['options']).map((key, num) => (
        renderOption(key)
      ))}
    </Grid>
  );
};

export default ChoiceOne;
