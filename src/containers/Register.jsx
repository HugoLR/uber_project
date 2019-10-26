/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Register.scss';

const Register = () => {
  return (
    <section className='register'>
      <div className='register__sidebar'>
        <h2>¿Ya tienes tu cuenta?</h2>
        <p>
          ¡Da click en el botón
          <br />
          iniciar sesión!
          <br />
        </p>
        <Link to='/login' className='button'>Iniciar sesión</Link>
      </div>
      <section className='register__container'>
        <div className='register__container-box'>
          <h2>Regístrate</h2>
          <form className='register__container--form'>
            <input className='input' type='text' placeholder='Nombre' />
            <input className='input' type='text' placeholder='Correo' />
            <input className='input' type='password' placeholder='Contraseña' />
            <button className='buttonRegister'>Registrarme</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Register;
