export const handleDynamicRoute: (route: string) => {
  baseRoute: string;
  dynamicId: string;
} = (route: string) => {
  let dynamicRouteArray: string[] = route.split("/:");
  let baseRoute: string = dynamicRouteArray[0] + "/:id";
  let dynamicId = dynamicRouteArray[1];
  return { baseRoute, dynamicId };
};
