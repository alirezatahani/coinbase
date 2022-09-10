import "./styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@global/Global";
import React from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>The theme is configured</h1>
    </ThemeProvider>
  );
}

export default App;
