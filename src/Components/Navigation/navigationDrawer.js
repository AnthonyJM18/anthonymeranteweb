import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CodeIcon from "@mui/icons-material/Code";
import CakeIcon from "@mui/icons-material/Cake";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const { forwardRef, useImperativeHandle } = React;

const NavigationDrawer = forwardRef((props, ref) => {
  const [state, setState] = React.useState({});

  useImperativeHandle(ref, () => ({
    openDrawer() {
      setState({ left: true });
    },
  }));

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ left: open });
  };

  const sendTitle = (title) => {
    props.setTitle(title);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/" onClick={() => sendTitle("About Me")}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>About Me</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/code" onClick={() => sendTitle("Coding")}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText>Coding</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/food" onClick={() => sendTitle("Baking")}>
          <ListItemIcon>
            <CakeIcon />
          </ListItemIcon>
          <ListItemText>Baking</ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer(false)}>
      {list("left")}
    </Drawer>
  );
});

export default NavigationDrawer;
