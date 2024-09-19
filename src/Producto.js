import React from "react";


function Producto(props) {
    return (
        <div>
            <h2>Nombre producto: {props.nombreproducto}</h2>
            <h2>Precio producto: {props.precioproducto}</h2>
        </div>
    );
}

export default Producto;