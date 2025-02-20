import React from "react";
import Home from "../pages/Home";

export interface CustomRoute {
  readonly name: string;
  readonly path: string;
  readonly children?: Array<any>;
  readonly checkAuth?: boolean;
  readonly element?: () => React.JSX.Element;
  readonly loader?: () => void;
}

export const AppRoutes: Array<CustomRoute> = [
  {
    name: "default",
    path: "/",
    element: () => <Home />,
  },
];
