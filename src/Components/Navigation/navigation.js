import React, { useRef } from "react";
import "../../App.css";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationDrawer from "./navigationDrawer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavigationComponent = () => {
  const [currentPage, setCurrentPage] = React.useState("About Me");

  const navigationDrawer_ref = useRef();

  const setPageTitle = (title) => {
    setCurrentPage(title);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            id="menu"
            sx={{ mr: 2 }}
            onClick={() => navigationDrawer_ref.current.openDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentPage}
          </Typography>
          <IconButton size="large" aria-label="GitHub" color="inherit"  href="https://github.com/AnthonyJM18"  target="_blank" >
            <GitHubIcon />
          </IconButton>
          <IconButton size="large" aria-label="LinkedIn" color="inherit" href="https://www.linkedin.com/in/anthonyjmerante/?original_referer=https%3A%2F%2Fajmportfolio.interconnected.live%2F" target="_blank">
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <NavigationDrawer ref={navigationDrawer_ref} setTitle={setPageTitle} />
    </Box>
  );
};

export default NavigationComponent;
