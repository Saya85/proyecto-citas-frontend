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

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    </Route>
    <Route path="/perfil" element={<Perfil />}>
    <Route path="/mascotas"element={<Mascotas/>}>
      
    </Route> 
    </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
