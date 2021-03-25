import React from "react";
import { useTranslation } from "react-i18next";

// Components
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion"

const bounceTransition = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  },
}

function Suggestion({data}) {
  const { t, i18n } = useTranslation();

  return (
    <Grid container alignItems="center">
      {data.text && (
        <Grid item>
          <Typography variant="body1">{t(data.text)}</Typography>
        </Grid>
      )}
      {data.img && (
        <motion.div
          animate={{ y: ["3%", "0%"] }}
          transition={bounceTransition}
        >
        <Grid item>
          <img
            src={data.img}
            alt="fint bilde"
            height={400}
            width={600}
          ></img>
        </Grid>
        </motion.div>
      )}
    </Grid>
  );
}

export default Suggestion;
