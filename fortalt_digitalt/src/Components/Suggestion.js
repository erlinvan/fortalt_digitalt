import React from "react";
import { useTranslation } from "react-i18next";

// Components
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

// Styling
import { makeStyles } from "@material-ui/core/styles";

const bounceTransition = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const useStyles = makeStyles((theme) => ({
  img: {
    height: 400,
    width: "100%",
    objectFit: "cover",
    userSelect: "none",
  },
}));

function Suggestion({ data }) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  console.log(data.text.split("\n"));

  return (
    <Grid container alignItems="center" spacing={2}>
      {data.text &&
        (data.img ? (
          <Grid item xs={12} sm={5}>
            <Typography variant="h5"> {data.title}</Typography>
            {data.text.split("\n").map((e) => (
              <Typography variant="body1">{e}</Typography>
            ))}
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Typography variant="h4"> {data.title}</Typography>
            {data.text.split("\n").map((e) => (
              <Typography variant="body1">{t(e)}</Typography>
            ))}
          </Grid>
        ))}
      {data.img && (
        <Grid item xs={12} sm={7}>
          <motion.div animate={{ y: ["-3%", "0%"] }} transition={bounceTransition}>
            <img src={data.img} alt="fint bilde" className={classes.img} />
          </motion.div>
        </Grid>
      )}
    </Grid>
  );
}

export default Suggestion;
