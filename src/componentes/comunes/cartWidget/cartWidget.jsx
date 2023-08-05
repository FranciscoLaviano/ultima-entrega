import { Badge } from "@mui/material";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexto/CartContext";

const cartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  let g = cantidadTotal();

  return (
    <Link to="/carro" style={{ color: "green" }}>
      <Badge badgeContent={g} color="primary" showZero>
        <ShoppingCartCheckoutOutlinedIcon color="main" sx={{ fontSize: 45 }} />
      </Badge>
    </Link>
  );
};

export default cartWidget;
