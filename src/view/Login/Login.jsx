import React from 'react'
import './login.css'

export default function Login () {
  return (
    <main className='login'>
      <form action=''>
        <h1 className='form__title'>Iniciar sesion</h1>

        <label htmlFor='nombre'>nombre:</label>
        <input type='text' name='nombre' />

        <label htmlFor='apellido'>apellido:</label>
        <input type='text' name='apellido' />

        <label htmlFor='correo'>correo:</label>
        <input type='text' name='correo' />

        <label htmlFor='id'>identificación:</label>
        <input type='number' name='id' />

        <label htmlFor='grado'>grado:</label>
        <input type='text' name='grado' />

        <input type='submit' className='btn' value='Enviar' />
      </form>
    </main>
  )
}
