import React from "react";

import ShareButton from "./ShareButton";
import { formatPrice } from "../../../hooks/formatPrice";
import { postCat } from "../../../api/User/Cat/postAddCart";
import "./ProductInfo.css";
import "./../../../css/section-main-product.css";
import "./../../../css/component-accordion.css";
import "./../../../css/component-price.css";
import "./../../../css/component-slider.css";
import "./../../../css/component-rating.css";
import "./../../../css/component-deferred-media.css";
import "./../../../css/component-pickup-availability.css";

import { toast } from "react-toastify";
import { accessToken } from "../../../Fetch/settings";

const ProductInfo = ({ onClick, data, onAddToCart }) => {
  if (!data || !data.name) {
    return <div></div>;
  }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!accessToken) {
      toast.error("Пожалуйста, авторизуйтесь, чтобы добавить товары в корзину.");
      return; 
  }

    const productId = data.id;
    postCat(productId, data, onAddToCart);
  };

 

  return (
    <section
      id="shopify-section-template--22795098816848__main"
      className="shopify-section section"
    >
      <product-info
        data-section="template--22795098816848__main"
        data-product-id="9302321234256"
        data-update-url="true"
        data-url={`/product/${data.slug}`}
      >
        <div
          id="MainProduct-template--22795098816848__main"
          className="section-template--22795098816848__main-padding gradient color-scheme-1"
        >
          <div className="page-width">
            <div className="product product--large product--left product--stacked product--mobile-hide grid grid--1-col grid--2-col-tablet">
              <div className="grid__item product__media-wrapper">
                <media-gallery
                  role="region"
                  aria-label="Средство просмотра галереи"
                  data-desktop-layout="stacked"
                >
                  <div
                    id="MediaGallery-template--22795098816848__main"
                    role="region"
                    className="product__column-sticky"
                  >
                    <div
                      id="GalleryStatus-template--22795098816848__main"
                      className="visually-hidden"
                      role="status"
                    ></div>
                    <slider-component>
                      <div
                        id="GalleryViewer-template--22795098816848__main"
                        className="slider-mobile-gutter"
                      >
                        <a
                          className="skip-to-content-link button visually-hidden quick-add-hidden"
                          href="#ProductInfo-template--22795098816848__main"
                        >
                          Перейти к информации о продукте
                        </a>
                        <ul
                          id="Slider-Gallery-template--22795098816848__main"
                          className="product__media-list contains-media grid grid--peek list-unstyled slider slider--mobile"
                          role="list"
                        >
                          <li
                            id="Slide-template--22795098816848__main-47349064958288"
                            className="product__media-item grid__item slider__slide is-active scroll-trigger animate--fade-in"
                            data-media-id="template--22795098816848__main-47349064958288"
                          >
                            <div
                              className="product-media-container media-type-image media-fit-contain global-media-settings gradient constrain-height"
                              style={{
                                "--ratio": "1.0",
                                "--preview-ratio": "1.0",
                              }}
                            >
                              <modal-opener>
                                <div
                                  className="product__modal-opener product__modal-opener--image"
                                  data-modal="#ProductModal-template--22795098816848__main"
                                >
                                  <span
                                    className="product__media-icon motion-reduce quick-add-hidden product__media-icon--lightbox"
                                    aria-hidden="true"
                                    onClick={onClick}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      className="icon icon-plus"
                                      width="19"
                                      height="19"
                                      viewBox="0 0 19 19"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.66724 7.93978C4.66655 7.66364 4.88984 7.43922 5.16598 7.43853L10.6996 7.42464C10.9758 7.42395 11.2002 7.64724 11.2009 7.92339C11.2016 8.19953 10.9783 8.42395 10.7021 8.42464L5.16849 8.43852C4.89235 8.43922 4.66793 8.21592 4.66724 7.93978Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.92576 4.66463C8.2019 4.66394 8.42632 4.88723 8.42702 5.16337L8.4409 10.697C8.44159 10.9732 8.2183 11.1976 7.94215 11.1983C7.66601 11.199 7.44159 10.9757 7.4409 10.6995L7.42702 5.16588C7.42633 4.88974 7.64962 4.66532 7.92576 4.66463Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.8324 3.03011C10.1255 0.323296 5.73693 0.323296 3.03011 3.03011C0.323296 5.73693 0.323296 10.1256 3.03011 12.8324C5.73693 15.5392 10.1255 15.5392 12.8324 12.8324C15.5392 10.1256 15.5392 5.73693 12.8324 3.03011ZM2.32301 2.32301C5.42035 -0.774336 10.4421 -0.774336 13.5395 2.32301C16.6101 5.39361 16.6366 10.3556 13.619 13.4588L18.2473 18.0871C18.4426 18.2824 18.4426 18.599 18.2473 18.7943C18.0521 18.9895 17.7355 18.9895 17.5402 18.7943L12.8778 14.1318C9.76383 16.6223 5.20839 16.4249 2.32301 13.5395C-0.774335 10.4421 -0.774335 5.42035 2.32301 2.32301Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>

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
                                  <div className="product__media media media--transparent">
                                    <img
                                      onClick={onClick}
                                      src={data.img}
                                      alt={data.name}
                                      width="1946"
                                      height="1946"
                                      className="image-magnify-lightbox"
                                      sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw / 1 - 4rem)"
                                    />
                                  </div>
                                  <button
                                    className="product__media-toggle quick-add-hidden product__media-zoom-lightbox"
                                    type="button"
                                    aria-haspopup="dialog"
                                    data-media-id="47349064958288"
                                    onClick={onClick}
                                  >
                                    <span className="visually-hidden">
                                      Открыть медиа-файлы 1 в модальном окне
                                    </span>
                                  </button>
                                </div>
                              </modal-opener>
                            </div>
                          </li>
                        </ul>
                        <div className="slider-buttons quick-add-hidden small-hide">
                          <button
                            type="button"
                            className="slider-button slider-button--prev"
                            name="previous"
                            aria-label="Листать назад"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="icon icon-caret"
                              viewBox="0 0 10 6"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                          <div className="slider-counter caption">
                            <span className="slider-counter--current">1</span>
                            <span aria-hidden="true"> / </span>
                            <span className="visually-hidden">из</span>
                            <span className="slider-counter--total">1</span>
                          </div>
                          <button
                            type="button"
                            className="slider-button slider-button--next"
                            name="next"
                            aria-label="Листать вперед"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="icon icon-caret"
                              viewBox="0 0 10 6"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </slider-component>
                  </div>
                </media-gallery>
              </div>
              <div className="product__info-wrapper grid__item scroll-trigger animate--slide-in">
                <section
                  id="ProductInfo-template--22795098816848__main"
                  className="product__info-container product__column-sticky"
                >
                  <p className="product__text inline-richtext caption-with-letter-spacing">
                    Craftopia
                  </p>
                  <div className="product__title">
                    <h1>{data.name}</h1>
                    <a
                      href={`/product/${data.slug}`}
                      className="product__title"
                    >
                      <h2 className="h1">{data.name}</h2>
                    </a>
                  </div>
                  <div id="price-template--22795098816848__main" role="status">
                    <div className="price price--large price--show-badge">
                      <div className="price__container">
                        <div className="price__regular">
                          <span className="visually-hidden visually-hidden--inline">
                            Обычная цена
                          </span>
                          <span className="price-item price-item--regular">
                            {formatPrice(data.price)} {data.currency}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form
                      method="post"
                      id="product-form-installment-template--22795098816848__main"
                      acceptCharset="UTF-8"
                      className="installment caption-large"
                      encType="multipart/form-data"
                    >
                      <input type="hidden" name="form_type" value="product" />
                      <input type="hidden" name="utf8" value="✓" />
                      <input type="hidden" name="id" value="48819056607568" />

                      <input
                        type="hidden"
                        name="product-id"
                        value="9302321234256"
                      />
                      <input
                        type="hidden"
                        name="section-id"
                        value="template--22795098816848__main"
                      />
                    </form>
                  </div>

                  <div>
                    <product-form
                      className="product-form"
                      data-hide-errors="false"
                      data-section-id="template--22795098816848__main"
                    >
                      <form
                        method="post"
                        id="product-form-template--22795098816848__main"
                        acceptCharset="UTF-8"
                        className="form"
                        encType="multipart/form-data"
                        noValidate="novalidate"
                        data-type="add-to-cart-form"
                        onSubmit={handleFormSubmit}
                      >
                        <input type="hidden" name="form_type" value="product" />
                        <input type="hidden" name="utf8" value="✓" />
                        <input
                          type="hidden"
                          name="id"
                          value="48819056607568"
                          className="product-variant-id"
                        />
                        <div className="product-form__buttons">
                          <button
                            id="ProductSubmitButton-template--22795098816848__main"
                            type="submit"
                            name="add"
                            className="product-form__submit button button--full-width button--secondary"
                          >
                            <span>Добавить в корзину</span>

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
                          </button>

                          <button
                            type="button"
                            className="product-form__submit button button--full-width button--secondary"
                            style={{ backgroundColor: "#FFC439"}}
                          >
                            <div
                              class="paypal-button-label-container"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                              }}
                            >
                              <span
                                class="paypal-button-text true"
                                optional=""
                                data-v-e6f98a5a=""
                                style={{
                                  textAlign: "center",
                                  whiteSpace: "nowrap", // Запрет на перенос
                                  marginRight: "5px", // Добавьте отступ между текстом и иконкой
                                }}
                              >
                                Оплатить через{" "}
                              </span>
                              <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                                data-v-4944b195=""
                                style={{ width: "69px", height: "22px"}}
                                role="presentation"
                                class="paypal-logo paypal-logo-paypal paypal-logo-color-blue"
                              />
                            </div>
                          </button>

                          <more-payment-options-link
                            buyer-country="PL"
                            access-token="dc90341093a5bbe7f3ff34e6149cc18d"
                            recommended-instrument="PayPal"
                            slot="more-options"
                          >
                            <a
                              className="shopify-payment-button__more-options"
                              id="more-payment-options-link"
                              href="#"
                            >
                              Другие способы оплаты
                            </a>
                          </more-payment-options-link>
                        </div>
                        <input
                          type="hidden"
                          name="product-id"
                          value="9302321234256"
                        />
                        <input
                          type="hidden"
                          name="section-id"
                          value="template--22795098816848__main"
                        />
                      </form>
                    </product-form>
                  </div>
                  <div className="product__description rte quick-add-hidden">
                    <p>{data.description}</p>
                  </div>
                  <ShareButton data={data} />
                  <a
                    href={`/product/${data.slug}`}
                    className="link product__view-details animate-arrow"
                  >
                    Просмотреть всю информацию
                    <svg
                      viewBox="0 0 14 10"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                      className="icon icon-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </product-info>
    </section>
  );
};

export default ProductInfo;
