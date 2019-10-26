/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';

import '../assets/styles/containers/Login.scss';

import twitterIcon from '../assets/icons/twitterBIcon.png';
import googleIcon from '../assets/icons/googleBIcon.png';
import facebookIcon from '../assets/icons/facebookBIcon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <section className='login__container-box'>
          <h2 className='login__container-box--title'>Inicia sesión</h2>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='imagen' />
            </div>
            <div>
              <img src={twitterIcon} alt='imagen' />
            </div>
            <div>
              <img src={facebookIcon} alt='imagen' />
            </div>
          </section>
          <form className='login__container-form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='correo'
              id='1'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='contraseña'
              id='2'
              onChange={handleInput}
            />
            <button className='button-iniciaSesión'>
              Iniciar sesión
            </button>

            <div className='login__container--remember-me'>
              <div className='body'>
                <div className='checkboxOverride'>
                  <input
                    type='checkbox'
                    name='hbnjmk,'
                    id='checkboxInputOverride'
                    value='1'
                  />
                  <label htmlFor='checkboxInputOverride' />
                </div>
                <div>recuérdame</div>
              </div>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>

        </section>
      </section>

      <section className='login__sidebar'>
        <h2>¿No tienes cuenta?</h2>
        <p>
          ¡Crea tu cuenta con nosotros
          <br />
          y únete a Taxi free!
          <br />
        </p>
        <Link to='/register' className='button'>regístrate</Link>
      </section>

    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
