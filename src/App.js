import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from "./components/layout";
import Login from "./components/users/login";
import Register from "./components/users/register";
import Perfil from "./components/users/perfil";
import Mascotas from "./components/mascotas/mascotas";
import ListaMascota from "./components/mascotas/listaMascota"
import NoMatch from "./components/404";
import Home from "./components/home";
import CitasMascota from "./components/citas/citasMacota";
import RegMascota from "./components/mascotas/regMacota";
import CitasMod from "./components/citas/citasMod";
import CitasPend from "./components/citas/citasPend";
import Logout from "./components/users/logout";

function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>}/>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path="*" element={<NoMatch />} />
          </Route>  
          <Route path="perfil" element={<Perfil />}>
              <Route path="mascotas"element={<Mascotas/>}/>
             
              <Route path="listaMascota"element={<ListaMascota/>} />
              <Route path="citas/:nombre"element={<CitasMascota/>}/>
              <Route path="logout"element={<Logout/>}/>
              <Route path="regMascota"element={<RegMascota/>}/>
              <Route path="citasMod"element={<CitasMod/>}/>
              <Route path="citasPend"element={<CitasPend/>}/>
              <Route path="*" element={<NoMatch />} />
              
           </Route>   
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
