import React from "react";
// import Products from "./Products";
import "./proDetail.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import Basket from './Basket';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "50px",
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    // height: "470px",
    // width: "730px",
    margin: "0",
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "lightgray 0px 6px 12px",
      transition: "0.2s ease-in",
    },
    itemDetail: {
      padding: "300px",
    },
  },
}));
function addToBasket(){
  
}
export const ProductDetails = ({ src, item, name, price }) => {
  const classes = useStyles();
   return (
    <div className="main">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <h1 className="name">The {name}</h1>
          <Grid item xs={12} sm={2}></Grid>
          <Grid container spacing={3}></Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <img alt={name} item xs={12} sm={12} src={src} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              className="cartDetail"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporqu is nostrud exercita tion ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
            </Paper>
            <h4 className="price">
              ${price}
              <button onClick={addToBasket()} className="basket-btn">
                Add To Basket{" "}
              </button>
            </h4>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
