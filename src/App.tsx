import React from "react";
import { useAppSelector } from "hooks/hooks";
import { ThemeProvider } from "styled-components";
import { routes } from "routes";
import { Route, Router } from "@utils/router";
import { theme } from "@global/Global";
import { darkTheme } from "@components/theme";
import "./styles/globals.css";

function App() {
  const userTheme = useAppSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={userTheme === "light" ? theme : darkTheme}>
      <Router>
        {routes.map((route) => {
          return (
            <Route key={route.to} to={route.to} component={route.component} />
          );
        })}
      </Router>
    </ThemeProvider>
  );
}

export default App;
