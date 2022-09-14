import { RouteType } from "./router_types";

export const Route:React.FC<RouteType> = ({ component }: RouteType) => {
  return component;
};
