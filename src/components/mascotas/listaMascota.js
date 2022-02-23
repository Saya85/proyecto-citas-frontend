import React from "react";
import { Link } from "react-router-dom";

const ListaMascota = () => {
    const mascotas = [
        'luci',
        'yaki',
        'buky'
    ]
    
    return (
        <div className="container-fluid vh-100">
            <div className="inner-margin">
                <div className="rounded d-flex justify-content-center">
                     <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <ul className="">
                            {mascotas.map(mascota => (
                                <li className="d-flex align-items-center justify-content-between mb-5">
                                    <Link to={`/perfil/mascotas/${mascota}`} className='col-3'>{mascota}</Link>
                                    <p className='col-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.</p>
                                </li>
                            ))}
                        </ul>
                        <Link to='/perfil/regMascota'>Añadir Mascota</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListaMascota