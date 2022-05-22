export const MARCAS = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiatico" },
];

//Anio actual
export const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(//convierte un iterable a array ej"HOLA" => ['H','O','L','A']
  new Array(20),//crear un nuevi array
  (valor, index) => YEARMAX - index //por defecto index - 0 hasta el tamanio del ARRAY
);


export const PLANES = [
  { id: 1, nombre: "Básico" },
  { id: 2, nombre: "Completo" },

];
