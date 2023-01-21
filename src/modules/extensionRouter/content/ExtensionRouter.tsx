import React, { useEffect } from "react";
import { LinkProps, RouterProps, RouterStackItem } from "./extensionRouter_types";
import { useForceUpdate } from "../utils";

let stack: RouterStackItem[] = [];
let forceUpdateStack: (() => void)[] = [];

function useForceUpdateStack(): void {
  const update = useForceUpdate();
  
  useEffect(() => {
    forceUpdateStack.push(update);
    return () => {
      const index = forceUpdateStack.indexOf(update);
      if (index > -1) {
        forceUpdateStack.splice(index, 1);
      }
    };
  }, [update]);
}
function forceUpdate() {
  forceUpdateStack.forEach((fn) => fn());
}

function goTo(comp: React.ComponentType<any>, props: any = {}): void {
  stack.push({ component: comp, props });
  forceUpdate();
}

function goBack(): void {
  if (stack.length) {
    stack.pop();
  }
  forceUpdate();
}

function popToTop(): void {
  stack = [];
  forceUpdate();
}

function Link({
  id = "",
  component,
  children,
  props = {},
  href = "",
  className = "",
  tag = "a",
  onClick,
  ...restProps
}: LinkProps & React.HTMLProps<HTMLElement>) {
  const onClickHandler = React.useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      if (component) {
        goTo(component, props);
      }
      if (!component && href) {
        window.open(href);
      }
      onClick && onClick(evt);
    },
    [component, props, href, onClick]
  );

  return React.createElement(
    tag,
    {
      href,
      className,
      id,
      onClick: onClickHandler,
      ...restProps,
    },
    children
  );
}

const emptyStackComponent: RouterStackItem = {
  component: ({ children }: any) => children,
  props: {},
};

function Router({ children }: RouterProps) {
  useForceUpdateStack();

  const { component: Component, props } =
    stack[stack.length - 1] || emptyStackComponent;

  return React.createElement(Component, props, children);
}

export { goBack, goTo, popToTop, Link, Router };
