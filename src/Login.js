import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import './Login.css'
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
      <div className='MainCont'>
    <div className='cont'>

      <h1 className='h1'>Вход на udevs news</h1>
      <form onSubmit={handleLogin}>
        <label>
          
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button className='but ' type="submit">Войти</button>
      </form>
    </div>
    adreyfus1309@gmail.com =  yV_HwR!@C3mT##U
      </div>
  );
};

export default withRouter(Login);
