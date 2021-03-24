import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

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
    setChoice(event.target.id);
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
                <Typography variant="p">{e}</Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ChoiceOne;
