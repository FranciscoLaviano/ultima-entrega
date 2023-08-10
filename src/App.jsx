import { BrowserRouter } from "react-router-dom";
import AppRuta from "./enrutado/AppRuta";
import ComponentesParaContexto from "./contexto/CartContext";
import ItemListContainer from "./componentes/paginas/itemList/ItemListContainer";
import DetalleProductos from "./componentes/paginas/itemDetail/DetalleProductos";
import CarroContenedor from "./componentes/carro/CarroContenedor";
import Navbar from "./componentes/layouts/navbar/Navbar";
/*
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<DetalleProductos />} />
          <Route path="/carro" element={<CarroContenedor />} />
        </Route>

        <Route path="*" element={<h1>Error 404-Sitio no encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
*/

function App() {
  return (
    <BrowserRouter>
      <ComponentesParaContexto>
        <AppRuta />
      </ComponentesParaContexto>
    </BrowserRouter>
  );
}

export default App;
