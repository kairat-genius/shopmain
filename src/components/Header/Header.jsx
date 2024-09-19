import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../public/logo1.png";
import "./Header.css";
import PredictiveSearch from "./PredictiveSearch";
import CartNotification from "./CartNotification";
import { getCartCount } from "../../api/User/Cat/getCartCount";

import "../../css/component-search.css";
import "../../css/component-menu-drawer.css";
import "../../css/component-cart-notification.css";
import "../../css/component-cart-items.css";
import "../../css/component-price.css";
import "../../css/component-list-menu.css";
import "../../css/component-slider.css";
import "../../css/component-slideshow.css";
import "../../css/component-predictive-search.css";

const Header = ({ notificationItem, setNotificationItem }) => {
  const [count, setCount] = useState(0); 

  useEffect(() => {
    getCartCount(setCount);
  }, []); 

  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // Получаем ссылки на элементы, с которыми будем работать
    const detailsElement = document.querySelector(
      "#Details-menu-drawer-container"
    );
    const bodyElement = document.body;
    const headerElement = document.querySelector(
      "#shopify-section-sections--22795099144528__header"
    );

    const searchElement = document.querySelector("#search-open");
    const updateClasses = () => {
      if (detailsElement.open) {
        // Если элемент открыт, добавляем классы
        bodyElement.classList.add("overflow-hidden-tablet");
        headerElement.classList.add("menu-open");
        detailsElement.classList.add("menu-opening");
        setIsOpen(true);
      } else {
        // Если элемент закрыт, удаляем классы
        bodyElement.classList.remove("overflow-hidden-tablet");
        headerElement.classList.remove("menu-open");
        detailsElement.classList.remove("menu-opening");
        setIsOpen(false);
      }

      if (searchElement.open) {
        bodyElement.classList.add("overflow-hidden");
        setSearchOpen(true);
      } else {
        bodyElement.classList.remove("overflow-hidden");
        setSearchOpen(false);
      }
    };

    // Первоначальная проверка
    updateClasses();

    // Добавляем обработчики событий для элементов details и search
    if (detailsElement) {
      detailsElement.addEventListener("toggle", updateClasses);
    }

    if (searchElement) {
      searchElement.addEventListener("toggle", updateClasses);
    }

    // Очистка обработчиков событий при размонтировании компонента
    return () => {
      if (detailsElement) {
        detailsElement.removeEventListener("toggle", updateClasses);
      }
      if (searchElement) {
        searchElement.removeEventListener("toggle", updateClasses);
      }
    };
  }, []);

  return (
    <>
      <div
        id="shopify-section-sections--22795099144528__announcement-bar"
        className="shopify-section shopify-section-group-header-group announcement-bar-section"
      >
        <div className="utility-bar color-scheme-1 gradient utility-bar--bottom-border">
          <div className="page-width utility-bar__grid">
            <div
              className="announcement-bar"
              role="region"
              aria-label="Объявление"
            >
              <p className="announcement-bar__message h5">
                <span>Уютная хижина художника, добро пожаловать!</span>
              </p>
            </div>
            <div className="localization-wrapper"></div>
          </div>
        </div>
      </div>
      <div
        id="shopify-section-sections--22795099144528__header"
        className="shopify-section shopify-section-group-header-group section-header scrolled-past-header shopify-section-header-sticky animate"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
          <symbol id="icon-search" viewBox="0 0 18 19" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z"
              fill="currentColor"
            ></path>
          </symbol>

          <symbol
            id="icon-reset"
            className="icon icon-close"
            fill="none"
            viewBox="0 0 18 18"
            stroke="currentColor"
          >
            <circle r="8.5" cy="9" cx="9" strokeOpacity="0.2"></circle>
            <path
              d="M6.82972 6.82915L1.17193 1.17097"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(5 5)"
            ></path>
            <path
              d="M1.22896 6.88502L6.77288 1.11523"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(5 5)"
            ></path>
          </symbol>

          <symbol
            id="icon-close"
            className="icon icon-close"
            fill="none"
            viewBox="0 0 18 17"
          >
            <path
              d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
              fill="currentColor"
            ></path>
          </symbol>
        </svg>

        <sticky-header data-sticky-type="on-scroll-up">
          <div className="header-wrapper color-scheme-1 gradient header-wrapper--border-bottom">
            <header className="header header--middle-left header--mobile-center page-width header--has-menu header--has-account">
              <header-drawer data-breakpoint="tablet">
                <details
                  id="Details-menu-drawer-container"
                  className="menu-drawer-container"
                >
                  <summary
                    className="header__icon header__icon--menu header__icon--summary link focus-inset"
                    aria-label="Меню"
                    role="button"
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls="menu-drawer"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        className="icon icon-hamburger"
                        fill="none"
                        viewBox="0 0 18 16"
                      >
                        <path
                          d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        className="icon icon-close"
                        fill="none"
                        viewBox="0 0 18 17"
                      >
                        <path
                          d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div
                    id="menu-drawer"
                    className="gradient menu-drawer motion-reduce color-scheme-1"
                    style={{
                      transform: isOpen ? "translate(0)" : "translate(-100%)",
                      visibility: isOpen ? "visible" : "hidden",
                      height: "87vh",
                    }}
                  >
                    <div className="menu-drawer__inner-container">
                      <div className="menu-drawer__navigation-container">
                        <nav className="menu-drawer__navigation">
                          <ul
                            className="menu-drawer__menu has-submenu list-menu"
                            role="list"
                          >
                            <li>
                              <a
                                id="HeaderDrawer-главная"
                                href="/"
                                className={`menu-drawer__menu-item list-menu__item link link--text focus-inset ${
                                  currentPath === "/"
                                    ? "menu-drawer__menu-item--active"
                                    : ""
                                }`}
                                aria-current={
                                  currentPath === "/" ? "page" : undefined
                                }
                              >
                                Главная
                              </a>
                            </li>
                            <li>
                              <a
                                id="HeaderDrawer-каталог"
                                href="/collections/all"
                                className={`menu-drawer__menu-item list-menu__item link link--text focus-inset ${
                                  currentPath === "/collections/all"
                                    ? "menu-drawer__menu-item--active"
                                    : ""
                                }`}
                                aria-current={
                                  currentPath === "/collections/all"
                                    ? "page"
                                    : undefined
                                }
                              >
                                Каталог
                              </a>
                            </li>
                            <li>
                              <a
                                id="HeaderDrawer-контакты"
                                href="/pages/contact"
                                className={`menu-drawer__menu-item list-menu__item link link--text focus-inset ${
                                  currentPath === "/pages/contact"
                                    ? "menu-drawer__menu-item--active"
                                    : ""
                                }`}
                                aria-current={
                                  currentPath === "/pages/contact"
                                    ? "page"
                                    : undefined
                                }
                              >
                                Контакты
                              </a>
                            </li>
                            <li>
                              <a
                                id="HeaderDrawer-о-нас"
                                href="/pages/about"
                                className={`menu-drawer__menu-item list-menu__item link link--text focus-inset ${
                                  currentPath === "/pages/about"
                                    ? "menu-drawer__menu-item--active"
                                    : ""
                                }`}
                                aria-current={
                                  currentPath === "/pages/about"
                                    ? "page"
                                    : undefined
                                }
                              >
                                О нас
                              </a>
                            </li>
                            <li>
                              <a
                                id="HeaderDrawer-портфолио"
                                href="/pages/portfolio"
                                className={`menu-drawer__menu-item list-menu__item link link--text focus-inset ${
                                  currentPath === "/pages/portfolio"
                                    ? "menu-drawer__menu-item--active"
                                    : ""
                                }`}
                                aria-current={
                                  currentPath === "/pages/portfolio"
                                    ? "page"
                                    : undefined
                                }
                              >
                                Портфолио
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div className="menu-drawer__utility-links">
                          <a
                            href="/account/login"
                            className="menu-drawer__account link focus-inset h5 medium-hide large-up-hide"
                          >
                            <account-icon>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                className="icon icon-account"
                                fill="none"
                                viewBox="0 0 18 19"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </account-icon>
                            Войти
                          </a>
                          <div className="menu-drawer__localization header-localization"></div>
                          <ul
                            className="list list-social list-unstyled"
                            role="list"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </header-drawer>
              <h1 className="header__heading">
                <a
                  href="/"
                  className="header__heading-link link link--text focus-inset"
                >
                  <div className="header__heading-logo-wrapper">
                    <img
                      src={logo}
                      alt="_xyd0jnik"
                      width="200"
                      height="50"
                      loading="eager"
                      className="header__heading-logo motion-reduce"
                      sizes="(max-width: 200px) 100vw, 100px"
                    />
                  </div>
                </a>
              </h1>

              <nav className="header__inline-menu">
                <ul className="list-menu list-menu--inline" role="list">
                  <li>
                    <a
                      id="HeaderMenu-главная"
                      href="/"
                      className={`header__menu-item list-menu__item link link--text focus-inset ${
                        currentPath === "/" ? "header__active-menu-item" : ""
                      }`}
                    >
                      <span
                        className={
                          currentPath === "/" ? "header__active-menu-item" : ""
                        }
                      >
                        Главная
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="HeaderMenu-каталог"
                      href="/collections/all"
                      className={`header__menu-item list-menu__item link link--text focus-inset ${
                        currentPath === "/collections/all"
                          ? "header__active-menu-item"
                          : ""
                      }`}
                    >
                      <span
                        className={
                          currentPath === "/collections/all"
                            ? "header__active-menu-item"
                            : ""
                        }
                      >
                        Каталог
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="HeaderMenu-контакты"
                      href="/pages/contact"
                      className={`header__menu-item list-menu__item link link--text focus-inset ${
                        currentPath === "/pages/contact"
                          ? "header__active-menu-item"
                          : ""
                      }`}
                    >
                      <span
                        className={
                          currentPath === "/pages/contact"
                            ? "header__active-menu-item"
                            : ""
                        }
                      >
                        Контакты
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="HeaderMenu-о-нас"
                      href="/pages/about"
                      className={`header__menu-item list-menu__item link link--text focus-inset ${
                        currentPath === "/pages/about"
                          ? "header__active-menu-item"
                          : ""
                      }`}
                    >
                      <span
                        className={
                          currentPath === "/pages/about"
                            ? "header__active-menu-item"
                            : ""
                        }
                      >
                        О нас
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="HeaderMenu-портфолио"
                      href="/pages/portfolio"
                      className={`header__menu-item list-menu__item link link--text focus-inset ${
                        currentPath === "/pages/portfolio"
                          ? "header__active-menu-item"
                          : ""
                      }`}
                    >
                      <span
                        className={
                          currentPath === "/pages/portfolio"
                            ? "header__active-menu-item"
                            : ""
                        }
                      >
                        Портфолио
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="header__icons header__icons--localization header-localization">
                <div className="desktop-localization-wrapper"></div>

                <details-modal>
                  <div className="header__search">
                    <details id="search-open">
                      <summary
                        className="header__icon header__icon--search header__icon--summary link focus-inset modal__toggle"
                        aria-haspopup="dialog"
                        aria-label="Поиск"
                        role="button"
                      >
                        <span>
                          <svg
                            className="modal__toggle-open icon icon-search"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#icon-search"></use>
                          </svg>
                          <svg
                            className="modal__toggle-close icon icon-close"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#icon-close"></use>
                          </svg>
                        </span>
                      </summary>
                      <div
                        className="search-modal modal__content gradient"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Поиск"
                      >
                        <div className="modal-overlay"></div>
                        <div
                          className="search-modal__content search-modal__content-bottom"
                          tabIndex="-1"
                        >
                          <PredictiveSearch />
                          <button
                            type="button"
                            className="search-modal__close-button modal__close-button link link--text focus-inset"
                            aria-label="Закрыть"
                            onClick={() => {
                              document
                                .getElementById("search-open")
                                .removeAttribute("open");
                            }}
                          >
                            <svg
                              className="icon icon-close"
                              aria-hidden="true"
                              focusable="false"
                            >
                              <use href="#icon-close"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </details>
                  </div>
                </details-modal>

                <a
                  href="/account/login"
                  className="header__icon header__icon--account link focus-inset small-hide"
                >
                  <account-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      className="icon icon-account"
                      fill="none"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </account-icon>
                  <span className="visually-hidden">Войти</span>
                </a>
                <a
                  href="/cart"
                  className="header__icon header__icon--cart link focus-inset"
                  id="cart-icon-bubble"
                >
                  <svg
                    className="icon icon-cart"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"
                    ></path>
                  </svg>
                  <span className="visually-hidden">Корзина</span>
                  {count > 0 && (
                    <div className="cart-count-bubble">
                      <span aria-hidden="true">{count}</span>
                      <span className="visually-hidden">Элементы: {count}</span>
                    </div>
                  )}
                </a>
              </div>
            </header>
          </div>
        </sticky-header>
        {notificationItem && (
          <CartNotification
            count={count}
            cartItems={[notificationItem]}
            onClose={() => setNotificationItem(null)}
          />
        )}
      </div>
    </>
  );
};

export default Header;
