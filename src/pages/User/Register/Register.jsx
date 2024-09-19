import { React, useState } from "react";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import InputField from "../../../components/InputField/InputField";
import { useNavigate } from 'react-router-dom';
import { registrationRequest } from "../../../api/User/postRegistration.jsx"
import "./Register.css";
import "./../../../css/customer.css";

const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    registrationRequest({ login, email, password, navigate });
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
          id="shopify-section-template--22795099046224__main"
          className="shopify-section"
        >
          <div className="customer register section-template--22795099046224__main-padding">
            <h1>Создать учетную запись</h1>
            <form
              method="post"
              id="create_customer"
              acceptCharset="UTF-8"
              noValidate="novalidate"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form_type" value="create_customer" />
              <input type="hidden" name="utf8" value="✓" />

              {/* Логин */}
              <InputField
                type="text"
                name="customer[first_name]"
                id="RegisterForm-FirstName"
                autoComplete="given-name"
                placeholder="Логин"
                label="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />

              {/* Email */}
              <InputField
                type="email"
                name="customer[email]"
                id="RegisterForm-email"
                autoComplete="email"
                placeholder="Адрес электронной почты"
                label="Адрес электронной почты"
                ariaRequired={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Пароль */}
              <InputField
                type="password"
                name="customer[password]"
                id="RegisterForm-password"
                placeholder="Пароль"
                label="Пароль"
                ariaRequired={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit">Создать</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
