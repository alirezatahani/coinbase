import { typography, common } from "@global/Global";
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  palette: {
    background: { color: "#1a1e29" },
    text: {
      color: "#fff",
    },
    border: { color: "#106236" },
    favCoinCard: {
      background: { color: "#26495c" },
      text: { color: "#e5e5dc" },
      border: { color: "#e5e5dc" },
      title: { color: "#f3ca20" },
      subTitle: { color: "#c4a35a" },
    },
    ...common,
  },
  typography,
};
