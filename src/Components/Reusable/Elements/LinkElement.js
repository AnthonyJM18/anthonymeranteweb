import { Container, Link } from "@mui/material";
import React from "react";
import "../../../App.css";
const LinkElement = (props) => {
  //<LinkElement content="" link="" alignment=""/>
  return (
    <Container maxWidth="false" sx={{ p: 0, m: 0 }}>
      <Link href={props.link}>{props.content}</Link>
    </Container>
  );
};

export default LinkElement;
