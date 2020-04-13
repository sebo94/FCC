import React from "react";
import classes from "./Expression.module.css";

const expression = (props) => (
  <div className={classes.Expression}>{props.currentExpression}</div>
);

export default expression;
