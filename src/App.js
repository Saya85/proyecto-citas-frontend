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

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
