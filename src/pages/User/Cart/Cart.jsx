import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import { React, useEffect, useState } from "react";
import "./Cart.css";
import "./../../../css/component-cart.css";
import "./../../../css/component-cart-items.css";
import "./../../../css/component-totals.css";
import "./../../../css/component-price.css";
import "./../../../css/component-discounts.css";
import "./../../../css/quantity-popover.css";
import { formatPrice } from "../../../hooks/formatPrice.js";
import { getCat } from "../../../api/User/Cat/getCat.jsx";
import { postDeleteCat } from "../../../api/User/Cat/postDeleteCat.jsx";
import { accessToken } from "../../../Fetch/settings.js";
const Cart = () => {
  const [data, setData] = useState([]);
  const [totalsum, setTotalSum] = useState([]);

  useEffect(() => {
    if (accessToken) {
      getCat(setData, setTotalSum);
    }
  }, []);

  const handleRemoveFromCart = (productId) => {
    postDeleteCat(productId)
    getCat(setData, setTotalSum);
    setData(data.filter(item => item.id !== productId));
  };

  const handleCheckout = (event) => {
    event.preventDefault(); 
    window.location.href = "/checkout";
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
        {data.length === 0 ? (
            <div
              className="cart__warnings"
              style={{ display: "block", marginBottom: "50px" }}
            >
              <h1 className="cart__empty-text" style={{ display: "block" }}>
                Корзина пуста.
              </h1>
              <a href="/collections/all" className="button">
                Продолжить покупки
              </a>
              {!accessToken && (
            <>
              <h2 className="cart__login-title">Уже есть учетная запись?</h2>
              <p className="cart__login-paragraph">
                <a href="/account/login" className="link underlined-link">
                  Войти
                </a>
                , чтобы оформить заказ быстрее.
              </p>
            </>
          )}
            </div>
          ) : (
        <div
          id="shopify-section-template--22795098587472__cart-items"
          className="shopify-section"
        >
          
            <cart-items className="gradient color-scheme-1 isolate section-template--22795098587472__cart-items-padding">
              <div className="page-width">
                <div className="title-wrapper-with-link">
                  <h1 className="title title--primary">Корзина</h1>
                  <a href="/collections/all" className="underlined-link">
                    Продолжить покупки
                  </a>
                </div>

                <form
                  action="/cart"
                  className="cart__contents critical-hidden"
                  method="post"
                  id="cart"
                >
                  <div
                    className="cart__items"
                    id="main-cart-items"
                    data-id="template--22795098587472__cart-items"
                  >
                    <div className="js-contents">
                      <table className="cart-items">
                        <caption className="visually-hidden">Корзина</caption>
                        <thead>
                          <tr>
                            <th
                              className="caption-with-letter-spacing"
                              colSpan="2"
                              scope="col"
                            >
                              Товар
                            </th>
                            <th
                              className="medium-hide large-up-hide right caption-with-letter-spacing"
                              colSpan="1"
                              scope="col"
                            >
                              Цена
                            </th>
                            <th
                              className="cart-items__heading--wide cart-items__heading--quantity small-hide caption-with-letter-spacing"
                              colSpan="1"
                              scope="col"
                            ></th>
                            <th
                              className="small-hide right caption-with-letter-spacing"
                              colSpan="1"
                              scope="col"
                            >
                              Цена
                            </th>
                          </tr>
                        </thead>
                        {data.map((cart, index) => (
                          <tbody key={cart.id}>
                            <tr className="cart-item" id={`CartItem-${index}`}>
                              <td className="cart-item__media">
                                <a
                                  href={`/product/${cart.slug}`}
                                  className="cart-item__link"
                                  aria-hidden="true"
                                  tabIndex="-1"
                                ></a>
                                <div className="cart-item__image-container gradient global-media-settings">
                                  <img
                                    src={cart.img}
                                    className="cart-item__image"
                                    alt={cart.name}
                                    loading="lazy"
                                    width="150"
                                    height="150"
                                  />
                                </div>
                              </td>

                              <td className="cart-item__details">
                                <a
                                  href={`/product/${cart.slug}`}
                                  className="cart-item__name h4 break"
                                >
                                  {cart.name}
                                </a>
                              </td>

                              <td className="cart-item__totals right medium-hide large-up-hide">
                                {cart.price} {cart.currency.name}
                                <div className="loading__spinner hidden">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    className="spinner"
                                    viewBox="0 0 66 66"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      className="path"
                                      fill="none"
                                      strokeWidth="6"
                                      cx="33"
                                      cy="33"
                                      r="30"
                                    ></circle>
                                  </svg>
                                </div>
                              </td>

                              <td className="cart-item__quantity">
                                <quantity-popover>
                                  <div className="cart-item__quantity-wrapper quantity-popover-wrapper">
                                    <cart-remove-button
                                      id={`Remove-${index}`}
                                      data-index={index}
                                    >
                                      <a
                                      href="#"
                                        onClick={() =>
                                          handleRemoveFromCart(cart.id)
                                        }
                                        className="button button--tertiary"
                                        aria-label={`Удалить «${cart.name}»`}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          aria-hidden="true"
                                          focusable="false"
                                          className="icon icon-remove"
                                        >
                                          <path
                                            d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
                                            fill="currentColor"
                                          ></path>
                                          <path
                                            d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
                                            fill="currentColor"
                                          ></path>
                                        </svg>
                                      </a>
                                    </cart-remove-button>
                                  </div>
                                </quantity-popover>
                              </td>

                              <td className="cart-item__totals right small-hide">
                                <div className="loading__spinner hidden">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    className="spinner"
                                    viewBox="0 0 66 66"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      className="path"
                                      fill="none"
                                      strokeWidth="6"
                                      cx="33"
                                      cy="33"
                                      r="30"
                                    ></circle>
                                  </svg>
                                </div>
                                <div className="cart-item__price-wrapper">
                                  <span className="price price--end">
                                  {formatPrice(cart.price)} {cart.currency}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>
                </form>
              </div>
            </cart-items>
         
          <div
            id="shopify-section-template--22795098587472__cart-footer"
            className="shopify-section cart__footer-wrapper"
          >
            <div
              className="gradient color-scheme-1"
              id="main-cart-footer"
              data-id="template--22795098587472__cart-footer"
            >
              <div className="page-width">
                <div className="cart__footer isolate section-template--22795098587472__cart-footer-padding">
                  <div className="cart__blocks">
                    <div className="js-contents">
                      <div></div>

                      <div className="totals">
                        <h2 className="totals__total">
                          Ориентировочная общая сумма
                        </h2>
                        <p className="totals__total-value">{formatPrice(totalsum)} ₽</p>
                      </div>
                    </div>
                    <div className="cart__ctas">
                      
                      <button
                        type="submit"
                        id="checkout"
                        className="cart__checkout-button button"
                        name="checkout"
                        form="cart"
                        onClick={handleCheckout}
                      >
                        Оформить заказ
                      </button>
                      
                    </div>

                    <div className="cart__dynamic-checkout-buttons additional-checkout-buttons">
                      <div
                        className="dynamic-checkout__content"
                        id="dynamic-checkout-cart"
                        data-shopify="dynamic-checkout-cart"
                      >
                        <div>
                          <div className="shopify-cleanslate">
                            <div className="paypal-button">
                              <img
                                alt="PayPal Logo"
                                className="paypal-image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIxLjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjYuNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5LjMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg"
                              />
                              <img
                                alt="PayPal Text"
                                className="paypal-image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="cart-errors"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
