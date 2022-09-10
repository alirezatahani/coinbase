import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  "*": {
    boxSizing: "border-box",
    fontFamily: theme.typography.fontFamily,
    margin: 0,
    padding: 0,
  },
}));

const theme: DefaultTheme = {
  palette: {
    background: { paper: "#fff", dark: "#2C3333" },
    common: {
      black: "#323232",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    primary: {
      main: "#1292EE",
      "200": "#D6EDFF",
      "400": "#57B0FB",
      "600": "#0077CC",
      "800": "#034077",
    },
    secondary: {
      main: "#434343",
    },
    success: {
      main: "#56C288",
      "200": "#E3fBEE",
      "400": "#87DBAE",
      "600": "#39AC6E",
      "800": "#106236",
    },
    danger: {
      main: "#dc3545",
      "200": "#f5c2c7",
      "400": "#ea868f",
      "600": "#9a2530",
      "800": "#58151c",
    },
    warning: {
      main: "#FFC555",
      "200": "#FFF2D7",
      "400": "#FDD88E",
      "600": "#FAB347",
      "800": "#CE7129",
    },
    disabled: {
      color: "#0000004d",
      backgroundColor: "#0000002d",
    },
  },
  typography: {
    fontFamily: ["Poppins", "OpenSans"].join(","),
    body1: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    input: {
      fontWeight: 300,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    button: {
      fontWeight: 300,
      fontStyle: "normal",
      fontSize: 18,
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    table: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.1px",
    },
    table2: {
      fontWeight: 900,
      fontStyle: "normal",
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.1px",
    },
    overLineCaption: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: "0.1px",
    },
    link: {
      fontWeight: "normal",
      fontStyle: "italic",
      fontSize: 12,
      lineHeight: "20px",
      letterSpacing: "0.15px",
    },
    h1: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 59,
      lineHeight: "80px",
      letterSpacing: "-0.5px",
    },
    h2: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 44,
      lineHeight: "64px",
      letterSpacing: "0px",
    },
    h3: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 33,
      lineHeight: "48px",
      letterSpacing: "0.25px",
    },
    h4: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 25,
      lineHeight: "40px",
      letterSpacing: "0px",
    },
    h5: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 19,
      lineHeight: "28px",
      letterSpacing: "0.15px",
    },

    subtitle1: {
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "24px",
      letterSpacing: "0.1px",
    },
    typographyDisabled: {
      color: "#0000004d",
      cursor: "not-allowed",
      userSelect: "none",
    },
  },
};
export { GlobalStyle, theme };
