import { ThemeProvider } from "styled-components";
import { theme } from "@global/Global";
import React from "react";
import "./styles/globals.css";
import Home from "@pages/home/content/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
