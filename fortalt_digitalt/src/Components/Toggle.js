import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

function Toggle() {
  const [selected, setSelected] = React.useState("ingenting");

  const handleChange = (event, value) => {
    setSelected(value);
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup
          color="secondary"
          size="small"
          value={selected}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="valg 1">Valg 1</ToggleButton>
          <ToggleButton value="valg 2">Valg 2</ToggleButton>
          <ToggleButton value="valg 3">Valg 3</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid>Du har valgt: {selected}</Grid>
    </Grid>
  );
}

export default Toggle;
