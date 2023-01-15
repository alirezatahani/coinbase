import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@global/Global";
import { Route, Router } from "@utils/router";
import "./styles/globals.css";
import { routes } from "routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {routes.map((route: { to: string; component: ReactElement }) => {
          return <Route to={route.to} component={route.component} />;
        })}
      </Router>
    </ThemeProvider>
  );
}
export default App;
