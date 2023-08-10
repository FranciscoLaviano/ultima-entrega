import { createContext, useState } from "react";

export const CartContext = createContext();

const ComponentesParaContexto = ({ children }) => {
  const [carro, setCarro] = useState([]);

  const AgregarAlCarro = (producto) => {
    let existe = carro.some((el) => el.id === producto.id);
    if (existe) {
      let nA = carro.map((el) => {
        if (producto.id === el.id) {
          return {
            ...el,
            quantity: producto.quantity,
          };
        } else {
          return el;
        }
      });

      setCarro(nA);
    } else {
      setCarro([...carro, producto]);
    }
  };

  const limpiarCarro = () => {
    setCarro([]);
  };

  const eliminarPorId = (id) => {
    let nA = carro.filter((el) => el.id !== id);
    setCarro(nA);
  };

  //Control de cantidades compradas

  const cantidadTotal = () => {
    let total = carro.reduce((acm, el) => {
      return acm + el.quantity;
    }, 0);

    return total;
  };

  //Precio general de la compra

  const precioGeneral = () => {
    let total = carro.reduce((acm, el) => {
      return acm + el.price * el.quantity;
    }, 0);

    return total;
  };

  //Control de cantidades compradas por id

  const cantidadesPorId = (id) => {
    let prd = carro.find((el) => el.id === +id);

    return prd?.quantity;
  };

  let data = {
    carro,
    AgregarAlCarro,
    limpiarCarro,
    eliminarPorId,
    cantidadTotal,
    precioGeneral,
    cantidadesPorId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default ComponentesParaContexto;
