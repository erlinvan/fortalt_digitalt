import React from "react";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const ChoiceOne = ({ choice, setChoice, data }) => {
  const handleChange = (event) => {
    setChoice(event.target.id);
  };
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={8} direction="column" alignItems="center">
        <Grid item>
          <h3>{data.question}</h3>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        {data &&
          data.options &&
          data.options.map((e) => (
            <Grid item xs={4} md={4} key={e}>
              <Paper
                elevation={2}
                key={e}
                id={e}
                onClick={(e) => {
                  handleChange(e);
                }}
                className={classes.paper}
              >
                {e}
              </Paper>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ChoiceOne;
