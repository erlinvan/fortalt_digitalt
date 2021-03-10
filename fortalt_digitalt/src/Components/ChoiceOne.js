import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

const ChoiceOne = ({ choiceOne, setChoiceOne, data }) => {
  const handleChange = (event, value) => {
    setChoiceOne(value);
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <h3>{data.question}</h3>
      <Grid item>
        <ToggleButtonGroup
          color="secondary"
          size="small"
          value={choiceOne}
          exclusive
          onChange={handleChange}
        >
          {data &&
            data.options &&
            data.options.map((e) => (
              <ToggleButton value={e}> {e} </ToggleButton>
            ))}
        </ToggleButtonGroup>
      </Grid>
      <Grid>Du har valgt: {choiceOne}</Grid>
    </Grid>
  );
};

export default ChoiceOne;
