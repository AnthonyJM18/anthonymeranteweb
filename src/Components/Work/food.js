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
          <LeftImgCard wth="25%" img="food/AppleCheesecake.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/CherCk.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/wcstrck.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/Strawberry Shortcake.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/tira.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/cookies.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/stcsc.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/bchic.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/gramen.png" header="" desc="">
          </LeftImgCard>
          <LeftImgCard wth="25%" img="food/tofu.png" header="" desc="">
          </LeftImgCard>
          
      </Card>
    </Paper>
    );
};

export default FoodComponent;
