import { typography, common } from "@global/Global";
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  palette: {
    background: { color: "#1a1e29" },
    text: {
      color: "#fff",
    },
    border: { color: "#106236" },
    ...common,
  },
  typography,
};
