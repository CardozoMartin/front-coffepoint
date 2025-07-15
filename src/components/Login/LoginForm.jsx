import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../utils/Input'
import { postLoginFn } from '../../API/apiLogin'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const LoginForm = () => {

    //RRD------------------------------------------
    const navigate = useNavigate();

    //RHF--------------------------------------------
    const { register, formState: { errors }, handleSubmit: onSubmitRHF, reset } = useForm();


    //TQUERY---------------------------------------------
    const { mutate: postLogin } = useMutation({
        mutationFn: postLoginFn,
        onSuccess: (data) => {
            toast.success('Inicio de sesión exitoso')
            reset()
            navigate('/')
        },
        onError: (error) => {
            console.error('Login failed:', error)
        }
    })

    //Handlers------------------------------------------------

    const handleSubmit = (data) => {
        console.log(data)
        postLogin(data)
    
    }

    return (
        <form onSubmit={onSubmitRHF(handleSubmit)}>
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

            <div className="mb-4">
                <Input
                    type="password"
                    id="contrasenia"
                    name="contrasenia"
                    className="form-control"
                    placeholder="••••••••"
                    error={errors.contrasenia || (errors.contrasenia && errors.contrasenia.message)}
                    label="Contraseña"
                    register={register}
                    option={{
                        required: 'La contraseña es obligatoria',
                        minLength: {
                            value: 6,
                            message: 'La contraseña debe tener al menos 6 caracteres'
                        }
                    }}
                />
            </div>

            <button
                type="submit"
                className="btn btn-coffee"
            >
                Iniciar Sesión
            </button>
        </form>
    )
}

export default LoginForm
