import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoutes, CustomRoute } from "./routes/AppRoutes.routes";

const renderRoutes = (routes: CustomRoute[]) => (
  <>
    {routes.map((route) => {
      const element = route.element && route.element();

      return <Route key={route.path} path={route.path} element={element} />;
    })}
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(AppRoutes)}</Routes>
    </BrowserRouter>
  );
};

export default App;
