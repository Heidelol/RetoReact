import React from "react";
import Badge from 'react-bootstrap/Badge'

function Conteo() {
    const [count, setCount] = React.useState(0)

    return (
        <div className="botoncompra">
            <Badge className="sc" pill bg="primary">
                Shopping Cart {count}
            </Badge>{' '}
            <button className="btnsc" onClick={() => setCount(count + 1)}>Comprar</button>
        </div>
    )
}

export default Conteo;