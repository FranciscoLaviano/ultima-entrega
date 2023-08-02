import CarroContador from "../../comunes/contador/CarroContador";

const Detalles = ({ producto, AgregarAlCarro, cantidadEnCarro = 1 }) => {
  <div>
    return (<h1>{producto.title}</h1>
    <h2>{producto.price}</h2>
    <CarroContador
      cantidadEnCarro={cantidadEnCarro}
      stock={producto.stock}
      AgregarAlCarro={AgregarAlCarro}
    />
    )
  </div>;
};

export default Detalles;
