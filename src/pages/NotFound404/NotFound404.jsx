import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import "./NotFound404.css";

const NotFound404 = () => {
  return (
    <>
      <Header />
      <main
        id="MainContent"
        className="content-for-layout focus-none"
        role="main"
        tabindex="-1"
      >
        <div
          id="shopify-section-template--22795098489168__main"
          className="shopify-section"
        >
          <div className="template-404 page-width page-margin center">
            <p>404</p>
            <h1 className="title">Страница не найдена</h1>
            <a href="/collections/all" className="button">
              Продолжить покупки
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound404;
