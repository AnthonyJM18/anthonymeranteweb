import React from "react";
import "../../../App.css";
import { Typography } from "@mui/material";
const TextElement = (props) => {
  //<TextElement content="" fontWeight="" variant="" />
  return (
    <Typography
      py={0.5}
      variant={props.textVariant ?? "body1"}
      sx={{ fontWeight: props.fontWeight ?? "normal" }}
    >
      {props.content}
    </Typography>
  );
};

export default TextElement;
