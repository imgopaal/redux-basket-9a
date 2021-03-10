import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ItemPlate from "./ItemPlate";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
//   } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "50px",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    height: "280px",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "lightgray 0px 6px 12px",
      transition: "0.2s ease-in",
    },
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ItemPlate
              price={190}
              item={1}
              name={"Air Jordan 1 Retro HP Green"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Pine-Green/Images/Air-Jordan-1-Retro-High-Pine-Green/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538777452&w=1000"
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ItemPlate
              price={230}
              item={2}
              name={"Air Jordan 1 Retro"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Bio-Hack/Images/Air-Jordan-1-Retro-High-Bio-Hack/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1599068019&w=1000"
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ItemPlate
              price={120}
              item={3}
              name={"Air Jordan 1 Retro HS Dark"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Strap-Dark-Grey-Anthracite/Images/Air-Jordan-1-Retro-High-Strap-Dark-Grey-Anthracite/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1560367330&w=1000"
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ItemPlate
              item={4}
              price={380}
              name={"Air Jordan 1 RH Yellow"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Yellow-Ochre/Images/Air-Jordan-1-Retro-High-Yellow-Ochre/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000"
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ItemPlate
              price={710}
              item={5}
              name={"Air Jordan 1 Retro H Fearless"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Images/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1573502731&w=1000"
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <ItemPlate
              price={540}
              item={6}
              name={"Air Jordan 1 Retro Chicago"}
              src={
                "https://stockx-360.imgix.net//Air-Jordan-1-Retro-Chicago-1994/Images/Air-Jordan-1-Retro-Chicago-1994/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1546586711&w=1000"
              }
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
