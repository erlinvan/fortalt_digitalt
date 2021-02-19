import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup, Grid } from "@material-ui/core";
import Toggle from "./Toggle";

function App() {
  return (
    <>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <h1>Hei!</h1>
          <p>Her kan du finne forslag til nye ting å gjøre</p>
        </Grid>
        <Grid item>
          <Toggle />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
