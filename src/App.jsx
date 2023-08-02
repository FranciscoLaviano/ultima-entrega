import { BrowserRouter } from "react-router-dom";
import AppRuta from "./enrutado/AppRuta";
import ComponentesParaContexto from "./contexto/CartContext";

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
