import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import Detalles from "./Detalles";
import { CartContext } from "../../../contexto/CartContext";

const DetalleProductos = () => {
  const [producto, setProducto] = useState({});
  let id = useParams();
  const { AgregarAlCarro, cantidadesPorId } = useContext(CartContext);
  let productosDeLCarro = cantidadesPorId(id);

  useEffect(() => {
    let rc = collection(db, "productos");
    let rd = doc(rc, id);
    getDoc(rd).then((s) => setProducto({ ...s.data(), id: s.id }));
  }, [id]);

  const ac = (c) => {
    let data = {
      ...producto,
      quantity: c,
    };
    ac(data);

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
        producto={producto}
        AgregarAlCarro={AgregarAlCarro}
        productosDeLCarro={productosDeLCarro}
      />
      <ToastContainer />
    </>
  );
};

export default DetalleProductos;
