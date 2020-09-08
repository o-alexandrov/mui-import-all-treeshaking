import React from "react";
import * as mui from "@material-ui/core";

const useStyles = mui.makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <mui.Button variant="contained">Default</mui.Button>
      <mui.Button variant="contained" color="primary">
        Primary
      </mui.Button>
      <mui.Button variant="contained" color="secondary">
        Secondary
      </mui.Button>
      <mui.Button variant="contained" disabled>
        Disabled
      </mui.Button>
      <mui.Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </mui.Button>
    </div>
  );
}
