import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthSessionStore } from "../store/authSessionStore";


export const postLoginFn = async (datosDelCliente) => {
    try {
        const res = await axios.post('http://localhost:4000/api/login/', datosDelCliente);

        //sacamos el token que viene en la peticion del back
        const token = res.data.token;

        //ahora decodificamos el token para obtener los datos del usuario
        const datosDelUsuario = jwtDecode(token)

        //guadamos los datos del token y el usuario en el store
        useAuthSessionStore.getState().setToken(token);
        useAuthSessionStore.getState().setUser(datosDelUsuario);
        
        return datosDelUsuario;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error; // Propagate the error for further handling
    }
}