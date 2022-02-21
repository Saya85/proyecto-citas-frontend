import { NavLink, Link, Outlet} from "react-router-dom";
import ListaMascota from "./listaMascota"
function Perfil() {
  let activeClassName = "underline"
  let liClassName = "nav-item";
  let navLink = "nav-link";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/">Home</NavLink>
            </li> 
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="mascotas">mascotas</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/citas">citas</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/logout">logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="container-fluid vh-100">
        <div className="inner-margin">
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
              <Outlet/>
              <li><Link to='listaMascota'>lista de mascotas</Link></li>
             {/*  <li><Link to='regMascota'>registrar nueva mascota</Link></li> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;