import { Fragment, useState } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
  const { datos, handleChangeDatos, alerta, setAlerta, cotizarSeguro } =
    useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(datos).includes("")) {
      setAlerta("Todos los campos son obligatorios.");
      setTimeout(() => {
        setAlerta("");
      }, 4000);

      return;
    }

    cotizarSeguro()
  };
  return (
    <>
      {alerta && <Error />}

      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label htmlFor="marca" className="block mb-3 text-gray-400 uppercase font-bold">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-500"
            onChange={handleChangeDatos}
            value={datos.marca}
          >
            <option value="">--Seleccione--</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="marca" className="block mb-3 text-gray-400 uppercase font-bold">
            AÑO
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-500"
            onChange={handleChangeDatos}
            value={datos.year}
          >
            <option value="">--Seleccione el año--</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="marca" className="block mb-3 text-gray-400 uppercase font-bold">
            Elije un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor={plan.id}>{plan.nombre}</label>
                <input
                  onChange={handleChangeDatos}
                  id={plan.id}
                  type="radio"
                  name="plan"
                  value={plan.id}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full uppercase bg-indigo-500 py-3 font-black text-white cursor-pointer hover:bg-indigo-700 transition-colors"
          value="cotizar"
        ></input>
      </form>
    </>
  );
};

export default Formulario;
