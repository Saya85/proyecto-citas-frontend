import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from "./components/layaout";
import Login from "./components/login";
import Register from "./components/register";
import Perfil from "./components/perfil";
import Mascotas from "./components/mascotas";
import ListaMascota from "./components/listaMascota"
import NoMatch from "./components/404";
import Home from "./components/home";

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
