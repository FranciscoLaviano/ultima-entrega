import { useState } from "react";
import Contador from "./contador";

const CarroContador = ({ ac, stock, CantidadEnCarro = 1 }) => {
  const [cuenta, setCuenta] = useState(CantidadEnCarro);

  return (
    <Contador cuenta={cuenta} setCuenta={setCuenta} aC={ac} stock={stock} />
  );
};

export default CarroContador;
