import {Link, useParams} from  "react-router-dom";

const CitasPend = () => {
    const citas = [
        {nombre:'luci', fecha:'21/12/2022'}, 
        {nombre:'yaki', fecha:'21/8/2022'},
        {nombre:'buky', fecha:'20/12/2022'}
    ]
    

    return (
        <div>
             {citas.map(cita => (
            <p><Link to={`/perfil/citas/${cita.nombre}`}>Cita</Link> {cita.nombre} fecha {cita.fecha}</p>
             ))}
        </div>
    )
}

export default CitasPend;