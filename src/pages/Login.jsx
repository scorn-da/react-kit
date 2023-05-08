import React, { useContext } from 'react';
import Input from "src/components/UI/Input/Input";
import Button from "src/components/UI/Button/Button";
import { AuthContext } from "src/context";

const Login = () => {
  const {isAuthed, setIsAuthed} = useContext(AuthContext);

  function login(evt) {
    evt.preventDefault();
    setIsAuthed(true);
  }

  return (
      <div>
        <h1>Страница авторизации</h1>
        <form onSubmit={login}>
          <Input type="text" placeholder="Логин" value=''
                 onChange={(evt) => {}}/>
          <Input type="password" placeholder="Пароль" value=''
                 onChange={(evt) => {}}/>
          <Button>Войти</Button>
        </form>
      </div>
  );
};

export default Login;