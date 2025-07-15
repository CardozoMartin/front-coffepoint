import axios from "axios"


//funcion para conectar a la base de datos y registrar un cliente
export const postRegisterFn = async (datosDelCliente)=>{
    
    
    try {
        const res = await axios.post('http://localhost:4000/api/cliente/crearcliente',datosDelCliente)
    } catch (error) {
        console.error("Error al registrar el cliente:", error);
        throw error; 
    }
}