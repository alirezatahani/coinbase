import React, { ReactElement } from "react";
import { RouterType } from "./router_types";
import useRouter from "./useRouter";

export const Router: React.FC<RouterType> = ({ children }: any) => {
  const { stack, goBack } = useRouter();
  let lastStackItem = stack?.[stack.length - 1];

  if (lastStackItem?.includes(":")) {
    let dynamicRouteArray: string[] = lastStackItem.split("/:");
    let dynamicRoute: string = dynamicRouteArray[0] + "/:id";
    let dynamicId = dynamicRouteArray[1];

    return React.Children.map(children, (child: ReactElement) => {
      const clonedElement = React.cloneElement(child.props.component, {
        id: dynamicId,
      });
      switch (dynamicRoute) {
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
