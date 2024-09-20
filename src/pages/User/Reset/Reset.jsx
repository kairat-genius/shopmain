import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import InputField from "../../../components/InputField/InputField";
import { postValidResetPassword } from "../../../api/User/postValidResetPassword.jsx";
import { postConfirmResetPassword } from "../../../api/User/postResetPasswordConfirm.jsx";
import NotFound404 from '../../NotFound404/NotFound404.jsx';
import { toast } from 'react-toastify'; 
import "./Reset.css";
import "./../../../css/customer.css";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const { uid, token } = useParams(); 
  const [isValid, setIsValid] = useState(false); 
  const [new_password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    postValidResetPassword({ uid, token })
      .then(result => {
        if (result.valid) {
          setIsValid(true);
        } else {
          setIsValid(false);
          toast.error('Invalid or expired reset link.');
        }
      });
  }, [uid, token]);

  if (!isValid) {
    return <NotFound404 />;
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (new_password === passwordConfirmation) {
      postConfirmResetPassword({ uid, token, new_password }, navigate)
    } else {
      toast.error('Passwords do not match.');
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
          id="shopify-section-template--22795099078992__main"
          className="shopify-section"
        >
          <div className="customer reset-password section-template--22795099078992__main-padding">
            <svg style={{ display: "none" }}>
              <symbol id="icon-error" viewBox="0 0 13 13">
                <circle
                  cx="6.5"
                  cy="6.50049"
                  r="5.5"
                  stroke="white"
                  strokeWidth="2"
                ></circle>
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="5.5"
                  fill="#EB001B"
                  stroke="#EB001B"
                  strokeWidth="0.7"
                ></circle>
                <path
                  d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
                  fill="white"
                ></path>
                <path
                  d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
                  fill="white"
                  stroke="#EB001B"
                  strokeWidth="0.7"
                ></path>
              </symbol>
            </svg>
            <h1>Сбросьте пароль учетной записи</h1>
            <p>Введите новый пароль</p>
            <form method="post" action="/account/reset" acceptCharset="UTF-8" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="form_type"
                value="reset_customer_password"
              />
              <input type="hidden" name="utf8" value="✓" />
              {/* Пароль */}
              <InputField
                type="password"
                name="customer[password]"
                id="password"
                autoComplete="new-password"
                placeholder="Пароль"
                label="Пароль"
                aria-required="true"
                value={new_password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Подтвердить Пароль */}
              <InputField
                type="password"
                name="customer[password_confirmation]"
                id="password_confirmation"
                autoComplete="new-password"
                placeholder="Подтвердить пароль"
                label="Подтвердить пароль"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <button type="submit">Сбросить пароль</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Reset;
