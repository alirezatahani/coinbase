import React, { ReactElement } from "react";
import { RouterType } from "./router_types";
import useRouter from "@utils/router/useRouter";

export const Router: React.FC<RouterType> = ({ children }: any) => {
  const { stack, goBack} = useRouter();

  return React.Children.map(children, (child: ReactElement) => {
    switch (stack?.[stack.length - 1]) {
      case child.props.to:
        return (
          <div>
            {child.props.component}
            <button onClick={() => goBack()}>go back</button>
          </div>
        );
      default:
        break;
    }
  });
};
