import { Grid, Typography } from "@material-ui/core";
import React from "react";

function Suggestion(suggestion) {
  const data = suggestion.suggestion;
  return (
    <>
      <Grid container alignItems="center">
        {data && (
          <Grid item>
            <Typography variant="p">{data.text}</Typography>
          </Grid>
        )}
        {data.img && (
          <Grid item>
            <img
              src={process.env.PUBLIC_URL + data.img}
              alt="fint bilde"
              height={400}
              width={600}
            ></img>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Suggestion;
