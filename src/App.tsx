import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@global/Global";
import { useRouter } from "@utils/router";
import { darkTheme } from "@components/theme";
import Home from "@pages/home/content/Home";
import "./styles/globals.css";

function App() {
  const [userTheme, setUserTheme] = useState("light");
  const { goTo, goBack } = useRouter();
  const themeToggler = () => {
    userTheme === "light" ? setUserTheme("dark") : setUserTheme("light");
  };

  return (
    <ThemeProvider theme={userTheme === "light" ? theme : darkTheme}>
      <Home userTheme={userTheme} themeHandler={themeToggler} />
    </ThemeProvider>
  );
}
export default App;
