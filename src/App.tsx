import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Outlet } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import NavigationComponent from "./Components/Navigation/navigation";


function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavigationComponent />
    <Container maxWidth="xl" sx={{ marginTop: "1%", px: 1 }}>
      <Outlet />
    </Container>
  </ThemeProvider>
  );
}

export default App;
