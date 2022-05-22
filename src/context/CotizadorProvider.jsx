import { useState, createContext } from "react";
import {
  calcularMarca,
  calcularPlan,
  formatearDinero,
  obtenerDiferenciaYear,
} from "../helpers";

const CotizadorContext = createContext();

//provider -> la fuente de los datos
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [alerta, setAlerta] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (e) => {


    const objetoFormulario = {
      ...datos, //copia
      [e.target.name]: e.target.value, //reescribir propiedad
    };

    setDatos(objetoFormulario);
  };

  const cotizarSeguro = () => {
    setCargando(true);
    //Una base
    let resultado = 2000;

    //Obtener la diferencia de anios
    const diferencia = obtenerDiferenciaYear(datos.year);

    //Hay que restar el 3% por cada anio
    resultado -= diferencia * 0.03 * 2000;

    //Europeo 30%
    //Americano 15%
    //Asiatico 5%
    resultado *= calcularMarca(datos.marca);

    //Basico 20%
    //Completo 50%.
    resultado *= calcularPlan(datos.plan);
    resultado = formatearDinero(resultado);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);

    }, 2000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        alerta,
        setAlerta,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
