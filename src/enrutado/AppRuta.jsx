import { Route, Routes } from "react-router-dom";
import Layout from "../componentes/layouts/Layout";
import { routes } from "./Enrutado.js";

const AppRuta = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<h1>404 - Sitio no encontrado</h1>} />
    </Routes>
  );
};

export default AppRuta;
