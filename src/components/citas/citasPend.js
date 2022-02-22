import {Link, useParams} from  "react-router-dom";

const CitasPend = () => {
    const {nombre} = useParams() 

    return (
        <div>
            <Link to={`/citas/${nombre}`}>Cita {nombre}</Link>
        </div>
    )
}

export default CitasPend;