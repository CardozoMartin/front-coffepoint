import axios from "axios";


export const postLoginFn = async (datosDelCliente) => {
    try {
        const res = await axios.post('http://localhost:4000/api/login/', datosDelCliente);
        return res.data; // Assuming the response contains user data or a token
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error; // Propagate the error for further handling
    }
}