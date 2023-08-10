import CarroContador from "../../comunes/contador/CarroContador";

const Detalles = ({ producto, AgregarAlCarro, cantidadEnCarro }) => {
  return (
    <div>
      <h1>{producto.title}</h1>
      <h2>{producto.price}</h2>
      <CarroContador
        cantidadEnCarro={cantidadEnCarro}
        stock={producto.stock}
        ac={AgregarAlCarro}
      />
    </div>
  );
};

export default Detalles;
