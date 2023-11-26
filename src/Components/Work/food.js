import React from "react";
import {
  Card,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "../../theme";
import LeftImgCard from "../Reusable/LeftImgCard";

const FoodComponent = () => {
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper elevation={3} sx={{ pt: 2, px: 2, mb: 5, mx: "auto"}} >
      <Card sx={isMedium ? { display: "block" } : { display: "flex", flexWrap: "wrap" }}>
          <LeftImgCard wth="25%" img="AppleCheesecake.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="CherCk.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="wcstrck.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="Strawberry Shortcake.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="tira.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="cookies.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="stcsc.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="bchic.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="gramen.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="tofu.png" header="" desc="">
          </LeftImgCard>
          
      </Card>
    </Paper>
    );
};

export default FoodComponent;
