import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoutes, CustomRoute } from "./routes/AppRoutes.routes";
import store from "./redux/store";

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
    <Provider store={store}>
      <BrowserRouter>
        <Routes>{renderRoutes(AppRoutes)}</Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
