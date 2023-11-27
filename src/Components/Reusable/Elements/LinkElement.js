import { Container, Link } from "@mui/material";
import React from "react";
import "../../../App.css";
const LinkElement = (props) => {
  if (props.isPdf) {
    const pdfUrl = "https://github.com/AnthonyJM18/anthonymeranteweb/tree/master/src/resources/" + props.link;
    return (
    <Container maxWidth="false" sx={{ p: 0, m: 0 }}>
      <Link href={pdfUrl}>{props.content}</Link>
    </Container>
    );
  }
  return (
    <Container maxWidth="false" sx={{ p: 0, m: 0 }}>
      <Link href={props.link}>{props.content}</Link>
    </Container>
  );
};

export default LinkElement;
