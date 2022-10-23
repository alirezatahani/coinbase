import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@global/Global";
import { Route, Router, useRouter } from "@utils/router";
import "./styles/globals.css";
import Home from "@pages/home/content/Home";
import Alert from "@pages/alert/content/Alert";

function App() {
  const { goTo, goBack } = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route to="/" component={<Home />} />
        <Route to="/alert" component={<Alert />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
