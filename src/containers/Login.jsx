import React from 'react';

import '../assets/styles/containers/Login.scss'

import twitterIcon from '../assets/icons/twitterBIcon.png';
import googleIcon from '../assets/icons/googleBIcon.png';
import facebookIcon from '../assets/icons/facebookBIcon.png';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <section className="login__container-box">
        <h2 className="login__container-box--title">Inicia Sesión</h2>
        <section className="login__container--social-media">
          <div><img src={googleIcon}/> </div>
          <div><img src={twitterIcon}/> </div>
          <div><img src={facebookIcon}/> </div>
        </section>
        <form className="login__container-form">
          <input className="input" type="text" placeholder="correo" id="1"/>
          <input className="input" type="password" placeholder="contraseña" id="2"/>
          <button className="button-iniciaSesión">Iniciar Sesión</button>
          <div className="login__container--remember-me">
            <div className="body">
              <div className="checkboxOverride">
	  	            <input type="checkbox" name="hbnjmk," id="checkboxInputOverride" value="1"/>
		  	          <label htmlFor="checkboxInputOverride"></label>
              </div>
              <div>recuérdame</div>
            </div>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        
      </section>
    </section>

    <section className="login__sidebar">
      <h2>¿No tienes cuenta?</h2>
      <p>
        ¡Crea tu cuenta con nosotros <br/>
        y únete a Taxi free! <br/>
      </p>
      <button className="button">regístrate</button>
    </section>
    
  </section>
);

export default Login;
