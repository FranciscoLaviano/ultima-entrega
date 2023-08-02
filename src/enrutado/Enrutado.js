import ItemListContainer from "../componentes/paginas/itemList/ItemListContainer";
import DetalleProductos from "../componentes/paginas/itemDetail/DetalleProductos";
import CarroContenedor from "../componentes/carro/CarroContenedor";
import CheckoutContainer from "../componentes/paginas/checkout/CheckoutContainer";
import FormFormik from "../componentes/paginas/controlFormulario/FormFormik";
import Dashboard from "../componentes/paginas/dashboard/Dashboard";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: DetalleProductos,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CarroContenedor,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
];
