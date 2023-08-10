import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    let coleccionProductos = collection(db, "productos");
    if (!categoryName) {
      consulta = coleccionProductos;
    } else {
      consulta = query(
        coleccionProductos,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let aP = res.docs.map((e) => {
        return { ...e.data(), id: e.id };
      });
      console.log(aP);
      setItems(aP);
    });
  }, [categoryName]);

  return (
    <>
      <h2>Aquí van los productos</h2>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
