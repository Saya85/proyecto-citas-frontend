
import axios from "axios";

import authHeader from './auth';

const API_URL = 'http://localhost:2022/citas/';

class CitasService {
  getCitas(uuid) {
    try {
      return axios.post(API_URL + "cita/mascota", {
        "mascota": uuid
      }, { headers: authHeader() })
        .then((res) => {
          return res;
        })
        .catch((error) => {
          console.log(error);
          return false
        });
    } catch (error) {
    }
  }
}

export default new CitasService();