import "./styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@global/Global";
import React from "react";
import Home from "@pages/home/content/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
