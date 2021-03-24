import React from "react";

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

const ChoiceOne = ({ choice, setChoice, data }) => {
  const handleChange = (event) => {
    setChoice(event.currentTarget.id);
  };
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={8} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6">{data.question}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        {data &&
          data.options &&
          data.options.map((e) => (
            <Grid item 
              xs={4} 
              md={4} 
              key={e}
              id={e}
              onClick={handleChange}
            >
              <motion.div whileHover={{ scale: 0.8 }}>
                <Paper
                  elevation={2}
                  className={classes.paper}
                >
                  <Typography variant="body1">{e}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ChoiceOne;
