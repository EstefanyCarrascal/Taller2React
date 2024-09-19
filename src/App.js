import React, { useState } from "react";
import Saludo from "./Saludo";
import Producto from "./Producto";
import ContadorFuncional from "./ContadorFuncional";
import ContadorClase from "./ContadorClase";
import ListaProducto from "./ListaProducto";
import DetalleProducto from "./DetalleProducto";



//Ejercicio1 Saludo
// function App() {
//   return (
//     <div>
//       <Saludo nombre="Estefany Muñoz"/>
//     </div>
//   );
// }
export default App;

//ejercicio2 Producto
// function App() {
//   return (
//     <div>
//       <Producto nombreproducto = "Papitas de limón" precioproducto="2000"/>
//     </div>
//   );
// }

//Ejercicio3 Comparar componentes funcionales y de clase

//Componente de funcional llamado ContadorFuncional
// function App() {
//   return(
//     <div>
//       <ContadorFuncional/>
//     </div>
//   );
// }


//Componente de clase llamado ContadorClase
// function App() {
//     return (
//       <div>
//         <ContadorClase/>
//       </div>
//     )
// }



//Parte4 EjercicioFinal
// function App() {
//   const [producto, setProducto] = useState({nombre: "", precio: ""});
//   const [productos, setProductos] = useState([]);

//   const ManejarEnvio = (evento) => {
//     evento.preventDefault();
//     setProductos([...productos, producto]);
//     setProducto({nombre: "", precio: ""});
//   };

//   return (
//     <div>
//       <form onSubmit={ManejarEnvio}>
//       <input 
//       type="text"
//       value={producto.nombre}
//       onChange={(e) => setProducto({...producto, nombre: e.target.value})}
//       placeholder="Ingrese el nombre del producto."/>
//       <input 
//       type="text"
//       value={producto.precio}
//       onChange={(e) => setProducto({...producto, precio: e.target.value})}
//       placeholder="Ingrese el precio del producto"/>
//       <button type="submit">Agregar</button>
//       </form>
//       <h1>Lista de los productos</h1>
//       <ListaProducto productos={productos}/>
//     </div>
//   );
// }


//Ejercicio5 EjercicioExtra
// function App() {
//   return (
//     <div>
//       <DetalleProducto 
//       nombre="Helado de chocolate"
//       precio="4000"
//       descripcion="Delicioso helado de chocolate cremoso"/>
//     </div>
//   );
// }
