import { useState } from "react";
import Contador from "./contador";

const CarroContador = ({ AgregarAlCarro, stock, CantidadEnCarro = 1 }) => {
  const [cuenta, setCuenta] = useState(CantidadEnCarro);

  return (
    <Contador
      cuenta={cuenta}
      setCuenta={setCuenta}
      AgregarAlCarrito={AgregarAlCarro}
      stock={stock}
    />
  );
};

export default CarroContador;
