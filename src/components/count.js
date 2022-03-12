import React from "react";
import Badge from 'react-bootstrap/Badge'

function Conteo() {
    const [count, setCount] = React.useState(0)

    return (
        <div className="botoncompra">
            <button onClick={() => setCount(count + 1)}>Comprar</button>
            <Badge pill bg="primary">
                Shopping Car {count}
            </Badge>{' '}
        </div>
    )
}

export default Conteo;