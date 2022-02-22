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
import Home from "./components/users/home";

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
              <Route path="*" element={<NoMatch />} />
           </Route>   
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
