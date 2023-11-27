import React from "react";
import "../../App.css";
import { Card, Typography } from "@mui/material";
const LeftInfoCard = (props) => {
  return (
    <Card sx={{ p: 2, textAlign: "left", width: props.wth }}>
      <Typography variant={props.headerVariant ?? "h6"} align="left">
        {props.header}
      </Typography>
      <Typography variant={props.headerVariant ?? "subtitle1"} align="left">
        {props.subheader}
      </Typography>
      {props.list}
    </Card>
  );
};

export default LeftInfoCard;
