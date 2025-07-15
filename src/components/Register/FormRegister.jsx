import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../utils/Input';
import { postRegisterFn } from '../../API/apiRegister';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const FormRegister = () => {
    //con esta libreria manejamos los formularios de manera mas sencilla
    //RHF------------------------------
    const { register, formState: { errors }, handleSubmit: onSubmitRHF, reset } = useForm();

    //TQuery------------------------------
    const { mutate: postUser } = useMutation({
        mutationFn: postRegisterFn,
        onSuccess: () => {
            toast.success("Usuario registrado correctamente, revise su correo para activar su cuenta")
            reset()
        },
        onError: () => {
            toast.error("Error al registrarse, intente nuevamente")

            reset();
        }
    })


    //Handler-------------------------------
    //creamos la funcion para mandar los datos del formulario
    const handleSubmit = (data) => {
        console.log(data)
        postUser(data)
    }

    return (
        <form className="form-register" onSubmit={onSubmitRHF(handleSubmit)}>
            {/* Error general placeholder */}
            <div className="alert alert-danger mb-3" style={{ display: 'none' }}>
                Mensaje de error general
            </div>

            <div className="mb-3">
                <Input
                    label="Nombre completo"
                    name="nombre"
                    placeholder="Escribe tu nombre completo"
                    register={register}
                    error={errors.nombre || (errors.nombre && errors.nombre.message)}
                    option={{
                        required: 'El nombre es obligatorio',
                        minLength: {
                            value: 3,
                            message: 'El nombre debe tener al menos 3 caracteres'
                        },
                    }}
                />
            </div>

            <div className="mb-3">

                <Input
                    label="Nombre de apellido"
                    name="apellido"
                    placeholder="Escribe tu nombre de apellido"
                    register={register}
                    error={errors.apellido || (errors.apellido && errors.apellido.message)}
                    option={{
                        required: 'El nombre de apellido es obligatorio',
                        minLength: {
                            value: 3,
                            message: 'El nombre de apellido debe tener al menos 3 caracteres'
                        },
                    }}
                />
            </div>

            <div className="mb-3">
                <Input
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    placeholder="Escribe tu correo electrónico"
                    register={register}
                    error={errors.email || (errors.email && errors.email.message)}
                    option={{
                        required: 'El correo electrónico es obligatorio',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'El correo electrónico no es válido'
                        },
                    }}
                />
            </div>

            <div className="mb-3">
                <Input
                    label="Dirección"
                    name="direccion"
                    placeholder="Ingrese su dirección"
                    register={register}
                    error={errors.direccion || (errors.direccion && errors.direccion.message)}
                    option={{
                        required: 'La dirección es obligatoria',
                    }}
                />
            </div>

            <div className="mb-3">
                <Input
                    label="Teléfono"
                    name="telefono"
                    placeholder="Ej: +5493815555555 o 3815555555"
                    register={register}
                    error={errors.telefono || (errors.telefono && errors.telefono.message)}
                    option={{
                        required: 'El teléfono es obligatorio',
                        maxLength: {
                            value: 10,
                            message: 'El teléfono no debe exceder los 10 dígitos'
                        },
                        pattern: {
                            value: /^\+?[1-9]\d{1,14}$/,
                            message: 'El teléfono no es válido'
                        },
                    }}
                />
            </div>

            <div className="mb-4">
                <Input
                    label="Contraseña"
                    name="contrasenia"
                    type="password"
                    placeholder="••••••••"
                    register={register}
                    error={errors.contrasenia || (errors.contrasenia && errors.contrasenia.message)}
                    option={{
                        required: 'La contraseña es obligatoria',
                        minLength: {
                            value: 6,
                            message: 'La contraseña debe tener al menos 6 caracteres'
                        },
                    }}
                />
            </div>

            <button
                type="submit"
                className="btn btn-coffee"
            >
                Registrar
            </button>
        </form>
    )
}

export default FormRegister
