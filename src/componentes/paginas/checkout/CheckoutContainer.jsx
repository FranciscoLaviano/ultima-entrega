import { useContext, useState } from "react";
import { Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseconfig";

import { CartContext } from "../../../contexto/CartContext";

const CheckoutContainer = () => {
  const { carro, precioGeneral } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let total = precioGeneral();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    // AXIOS.POST("dasdasdas", userData)
    let order = {
      buyer: userData,
      items: carro,
      total,
      date: serverTimestamp(),
    };

    // CREAR UNA ORDEN DE COMPRA
    let ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

    // MODIFICAR TODOS LOS PRODUCTOS EN SU STOCK
    carro.forEach((elemento) => {
      updateDoc(doc(db, "productos", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>

      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Comprar
          </Button>
        </form>
      ) : (
        <h3>Su numero de compra: {orderId} </h3>
      )}
    </div>
  );
};

export default CheckoutContainer;
