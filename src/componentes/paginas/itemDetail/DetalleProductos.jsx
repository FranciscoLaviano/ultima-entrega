import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import Detalles from "./Detalles";
import { CartContext } from "../../../contexto/CartContext";

const DetalleProductos = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const { AgregarAlCarro, cantidadTotal } = useContext(CartContext);
  let productosDelCarro = cantidadTotal(id);

  useEffect(() => {
    let refCollection = collection(db, "productos");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const ac = (c) => {
    let data = {
      ...product,
      quantity: c,
    };
    AgregarAlCarro(data);

    toast.success("Producto agregado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <Detalles
        producto={product}
        AgregarAlCarro={ac}
        cantidadEnCarro={productosDelCarro}
      />
      <ToastContainer />
    </>
  );
};

export default DetalleProductos;
