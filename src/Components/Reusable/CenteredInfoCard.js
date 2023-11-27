import React from "react";
import "../../App.css";
import { Card, Typography } from "@mui/material";
const CenteredInfoCard = (props) => {
  return (
    <Card sx={{ p: 2, textAlign: "center", flexGrow: props.grow }}>
      <Typography variant={props.headerVariant ?? "h3"} align="center">
        {props.header}
      </Typography>
      <Typography variant={props.headerVariant ?? "h4"} align="center">
        {props.subheader}
      </Typography>
      {props.list}
    </Card>
  );
};

export default CenteredInfoCard;
