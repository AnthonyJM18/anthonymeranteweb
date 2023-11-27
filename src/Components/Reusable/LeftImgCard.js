import React from "react";
import "../../App.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../theme";

const LeftImgCard = (props) => {
  const isNotLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Card sx={isNotLarge ? { pb: 2, display: "block"} : { pb: 2, display: "flex", width: props.wth, px: 1 }}>
      <CardMedia
        component="img"
        sx={{mx: "auto"}}
        image={require("../../resources/images/"+props.img)}
      />
      <Box sx={{ flexDirection: "column" }} display={isNotLarge ? "block" : "flex"}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant={props.headerVariant ?? "subtitle1"} align="left">
          {props.header}
          </Typography>
          <Typography variant={props.headerVariant ?? "subtitle1"} align="left">
          {props.desc}
          </Typography>
          {props.list}
        </CardContent>
      </Box>
    </Card>
  );
};

export default LeftImgCard;
