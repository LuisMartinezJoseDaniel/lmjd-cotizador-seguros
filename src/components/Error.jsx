import React from "react";
import useCotizador from "../hooks/useCotizador";

const Error = () => {
  const { alerta } = useCotizador();

  return (
    <div className="bg-red-100 border border-red-400 font-bold uppercase text-center py-3 text-red-700">
      {alerta}
    </div>
  );
};

export default Error;
