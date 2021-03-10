import React from "react";
import "./basketDesign.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Success from "./Success";
const useStyles = makeStyles((theme) => ({
  root: {
    display:'all',
    flexGrow: 1,
    padding: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function Basket() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className="titl">SHOPPING BASKET</p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>ITEM </p>
              <p>Price </p>
            </div>
            <div
              style={{
                height: "1px",
                width: "100%",
                margin: "2px auto auto auto",
                background: "lightgray",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <img
                alt="Air jordan 1 retro HP Green"
                style={{ height: "150px" }}
                src="https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Pine-Green/Images/Air-Jordan-1-Retro-High-Pine-Green/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538777452&w=1000"
              />
              <h1>340</h1>
            </div>
            <div
              style={{
                height: "1px",
                width: "100%",
                margin: "2px auto auto auto",
                background: "lightgray",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h2>TOTAL </h2>
              <h2 style={{ color: "red" }}>340 USD</h2>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h2>Enter Card</h2>
            <h2 style={{ color: "lightgray" }}>1234-4567-9123</h2>
          </Paper>

          <Success />
        </Grid>
      </Grid>
    </div>
  );
}
