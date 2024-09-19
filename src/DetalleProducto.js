import React from "react";

function DetalleProducto(props) {
    return (
        <div>
            <h1>Nombre del producto: {props.nombre}</h1>
            <h2>Precio: {props.precio}</h2>
            <p>Descripción: {props.descripcion}</p>
        </div>
    );
}

export default DetalleProducto;