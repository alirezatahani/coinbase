import React, { ReactElement } from "react";
import { RouterType } from "./router_types";
import useRouter from "./useRouter";

export const Router: React.FC<RouterType> = ({ children, ...props }: any) => {
  const { stack, goBack } = useRouter();

  return React.Children.map(children, (child: ReactElement) => {
    switch (stack?.[stack.length - 1]) {
      case child.props.to:
        return (
          <div>
            {child.props.component}
            {stack?.length !== 1 && (
              <button onClick={() => goBack()}>go back</button>
            )}
          </div>
        );
      default:
        break;
    }
  });
};
