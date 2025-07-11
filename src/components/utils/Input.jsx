import React from 'react'

const Input = (props) => {
    const { placeholder, label, type= 'text', name, option = {}, register, className = '', error= false } = props
  return (
    <fieldset>
        <label htmlFor={name}>
            {label}
        </label>
        <input 
        type={type}
        className={`form-control ${className}`}
        name={name}
        placeholder={placeholder}
        {...register(name, option)}
       id={name}
        />
        {error && <div className="text-danger">{error.message}</div>}
    </fieldset>
  )
}

export default Input