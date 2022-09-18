import React, { ReactElement, ReactNode } from "react";

export type RouteType = {
  to: string;
  component: ReactElement;
};

export type RouterType = {
  children: JSX.Element | JSX.Element[];
};
