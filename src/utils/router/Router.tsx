import React, { ReactElement } from "react";
import { RouterType } from "./router_types";
import useRouter from "./useRouter";
import { handleDynamicRoute } from "./utils";

export const Router: React.FC<RouterType> = ({ children }: any) => {
  const { stack, goBack } = useRouter();
  let lastStackItem: string = stack?.[stack.length - 1];

  if (lastStackItem?.includes(":")) {
    const { baseRoute, dynamicId } = handleDynamicRoute(lastStackItem);
    return React.Children.map(children, (child: ReactElement) => {
      const clonedElement = React.cloneElement(child.props.component, {
        id: dynamicId,
      });
      switch (baseRoute) {
        case child.props.to:
          return (
            <>
              {React.createElement("div", {}, [clonedElement])}
              {stack?.length !== 1 && (
                <button onClick={() => goBack()}>go back</button>
              )}
            </>
          );
        default:
          break;
      }
    });
  } else {
    return React.Children.map(children, (child: ReactElement) => {
      switch (lastStackItem) {
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
  }
};
