import React, { ReactElement, useEffect } from "react";
import { RouterType } from "./router_types";

export const Router: React.FC<RouterType> = ({ children, ...props }: any) => {
  let stack: {}[] = ["/"];

  return React.Children.map(children, (child: ReactElement) => {
    switch (stack[stack.length - 1]) {
      case child.props.to:
        return child.props.component;
        break;

      default:
        break;
    }
  });
};
