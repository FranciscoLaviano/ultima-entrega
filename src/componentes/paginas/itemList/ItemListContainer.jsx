import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseconfig";
import { getDocs, collection } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  let consulta;
  let coleccionProductos = collection(db, "productos");
  if (!categoryName) {
    consulta = coleccionProductos;
  } else {
    consulta = query(coleccionProductos, where("category", "==", categoryName));
  }
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getDocs(consulta).then((res) => {
      let aP = res.docs.map((e) => {
        return { ...producto.data(), id: producto.id };
      });
      console.log(aP);
      setItems(aP);
    });
  }, categoryName);

  return (
    <>
      <h2>Aquí van los productos</h2>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
