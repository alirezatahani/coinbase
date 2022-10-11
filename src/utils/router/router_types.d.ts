import { ReactElement } from "react";

export type RouteType = {
  to: string;
  component: ReactElement;
  children?: JSX.Element | JSX.Element[] | string;
};

export type RouterType = {
  children: JSX.Element | JSX.Element[];
};
