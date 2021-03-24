import React from "react";

// Components
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion"

// Styling
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    position: 'relative'
  }
}));

const bounceTransition = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  },
}

function Suggestion(suggestion) {
  const classes = useStyles();
  const data = suggestion.suggestion;
  
  return (
    <>
      <Grid container alignItems="center">
        {data && (
          <Grid item>
            <Typography variant="body1">{data.text}</Typography>
          </Grid>
        )}
        {data.img && (
          <motion.div
            animate={{ y: ["3%", "0%"] }}
            transition={bounceTransition}
            className={classes.img}
          >
          <Grid item>
            <img
              src={process.env.PUBLIC_URL + data.img}
              alt="fint bilde"
              height={400}
              width={600}
            ></img>
          </Grid>
          </motion.div>
        )}
      </Grid>
    </>
  );
}

export default Suggestion;
