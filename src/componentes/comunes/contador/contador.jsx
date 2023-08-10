import { Button } from "@mui/material";

const Contador = (cuenta, setCuenta, aC, stock) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button
          disabled={cuenta <= 1}
          variant="contained"
          onClick={() => setCuenta(cuenta - 1)}
        >
          {" "}
          -
        </Button>
        <h2>{cuenta}</h2>
        <Button
          disabled={cuenta >= stock}
          variant="contained"
          onClick={() => setCuenta(cuenta + 1)}
        >
          +
        </Button>
      </div>
      <br />

      <Button variant="contained" color="secondary" onClick={() => aC(cuenta)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Contador;
