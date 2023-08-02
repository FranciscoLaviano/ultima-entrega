import CartWidget from "../../comunes/cartWidget/cartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  <div className="contenedordevinculos">
    <Link to="/">TICS ON LINE</Link>
    <ul className="nav">
      <Link to="/">Todo</Link>
      <Link to="/category/computadoras">PC`s</Link>
      <Link to="/category/tablets">Tablets</Link>
      <Link to="/category/celulares">Celulares</Link>
      <Link to="/category/laptops">Laptops</Link>
    </ul>
    <Link to="dashboard">Admin</Link>

    <CartWidget />
  </div>;
};

export default Navbar;
