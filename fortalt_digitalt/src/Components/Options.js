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

const ChoiceOne = ({ data, setChoice, when, setWhen, weather }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    if (event.currentTarget.id !== "") {
      setChoice(event.currentTarget.id);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      {'options' in data && Object.keys(data['options']).map((text, value) => (
        <Grid item 
          xs={4} 
          md={4} 
          id={data['options'][text]}
          onClick={handleChange}
        >
          <motion.div whileHover={{ scale: 0.8 }}>
            <Paper
              elevation={2}
              className={classes.paper}
            >
              <Typography variant="body1">{t(text)}</Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChoiceOne;
