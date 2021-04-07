import React from "react";
import { useTranslation } from "react-i18next";

// Components
import Hidden from '@material-ui/core/Hidden';
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

// Styling
import { makeStyles } from "@material-ui/core/styles";

const bounceTransition = {
  duration: 0.8,
  yoyo: Infinity,
  ease: "easeOut"
};

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    display: 'flex'
  },
  img: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 300,
      clipPath: 'polygon(50% 0, 100% 10%, 100% 100%, 0 100%, 0 10%)'
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: 450,
      clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 10% 100%, 0% 50%)'
    },
    objectFit: 'contain',
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
        <Grid item justify="center" xs={12} sm={7} className={classes.imgContainer}>
          <Hidden xsDown>
            <motion.img
              src={data.img} 
              animate={{ x: ["3%", "0%"] }} 
              transition={bounceTransition} 
              className={classes.img} 
            />
          </Hidden>
          <Hidden smUp>
            <motion.img
              src={data.img} 
              animate={{ y: ["3%", "0%"] }} 
              transition={bounceTransition} 
              className={classes.img} 
            />
          </Hidden>
        </Grid>
      )}
    </Grid>
  );
}

export default Suggestion;
