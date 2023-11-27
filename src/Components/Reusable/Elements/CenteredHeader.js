import { Card, Typography } from "@mui/material";
import React from "react";
import "../../../App.css";
const CenteredHeader = (props) => {
  //<CenteredHeader content="" variant=""/>
  return (
    <Card sx={{ paddingTop: 2, paddingX: 0, paddingBottom: 0, m: 0, textAlign: "center" }}>
      <Typography variant={props.variant ?? "h3"}>{props.content}</Typography>
    </Card>
  );
};

export default CenteredHeader;
