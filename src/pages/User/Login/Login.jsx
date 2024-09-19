import { React, useState } from "react";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import InputField from "../../../components/InputField/InputField";
import "./Login.css";
import { postLoginRequest } from "../../../api/User/postLogin.jsx";
import { useNavigate } from 'react-router-dom';
import "./../../../css/customer.css";
import { postResetPassword } from "../../../api/User/postResetPassword.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      postLoginRequest({ email, password, navigate });
    } else {
      alert("Please fill in both email and password.");
    }
  };

  const handleResetSubmit = (event) => {
    event.preventDefault();
    if (email) {
      postResetPassword({ email, navigate });
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <>
      <Header />
      <main
        id="MainContent"
        className="content-for-layout focus-none"
        role="main"
        tabIndex="-1"
      >
        <div
          id="shopify-section-template--22795098980688__main"
          className="shopify-section"
        >
          <div className="customer login section-template--22795098980688__main-padding">
            <h1 id="recover" tabIndex="-1">
              Сбросьте пароль
            </h1>
            <div>
              <p>Мы отправим вам письмо со ссылкой для сброса пароля.</p>
              <form
                onSubmit={handleResetSubmit}
              >
                <InputField
                  type="email"
                  name="email"
                  id="RecoverEmail"
                  autoComplete="email"
                  placeholder="Адрес электронной почты"
                  label="Адрес электронной почты"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Отправить</button>
                <a href="#login">Отменить</a>
              </form>
            </div>

            <h1 id="login" tabIndex="-1">
              Вход
            </h1>
            <div>
              <form
                onSubmit={handleSubmit}
              >
                <InputField
                  type="email"
                  name="customer[email]"
                  id="CustomerEmail"
                  autoComplete="email"
                  placeholder="Адрес электронной почты"
                  label="Адрес электронной почты"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  type="password"
                  name="customer[password]"
                  id="CustomerPassword"
                  autoComplete="current-password"
                  placeholder="Пароль"
                  label="Пароль"
                  ariaRequired={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <a href="#recover">Забыли пароль?</a>
                <button type="submit">Войти в систему</button>
                <a href="/account/register">Создать учетную запись</a>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
