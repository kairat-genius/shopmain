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

const ProductInfo = ({ onClick, data }) => {
  if (!data || !data.name) {
    return <div className="loader"></div>;
  }

  const handleAddToCart = (productId) => {
    postCat(productId, data, (product) => {
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    const productId = data.id;
    handleAddToCart(productId);
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
                  <div id="MediaGallery-template--22795098816848__main"
                  role="region"
                  className="product__column-sticky">
                  <div
                    id="GalleryStatus-template--22795098816848__main"
                    className="visually-hidden"
                    role="status"
                  ></div>
                  <slider-component
                  >
                    <div id="GalleryViewer-template--22795098816848__main"
                    className="slider-mobile-gutter">
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
                          style={{ "--ratio": "1.0", "--preview-ratio": "1.0" }}
                        >
                          <modal-opener
                          >
                            <div className="product__modal-opener product__modal-opener--image"
                            data-modal="#ProductModal-template--22795098816848__main">
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
                          <div
                            data-shopify="payment-button"
                            className="shopify-payment-button"
                          >
                            <shopify-accelerated-checkout
                              recommended='{"name":"paypal","wallet_params":{"shopId":85833122128,"countryCode":"PL","merchantName":"_xyd0jnik","phoneRequired":false,"companyRequired":false,"shippingType":"shipping","shopifyPaymentsEnabled":false,"paymentIntent":"AUTHORIZE","merchantId":null,"sdkUrl":"https://www.paypal.com/sdk/js?components=buttons\u0026commit=false\u0026currency=PLN\u0026locale=ru_RU\u0026client-id=AfUEYT7nO4BwZQERn9Vym5TbHAG08ptiKa9gm8OARBYgoqiAJIjllRjeIMI4g294KAH1JdTnkzubt1fr\u0026intent=authorize"}}'
                              fallback='{"name":"buy_it_now","wallet_params":{}}'
                              access-token="dc90341093a5bbe7f3ff34e6149cc18d"
                              buyer-country="PL"
                              buyer-locale="ru"
                              buyer-currency="PLN"
                              variant-params='[{"id":48819056607568,"requiresShipping":false}]'
                              shop-id="85833122128"
                            >
                              <shopify-buy-it-now-button
                                access-token="dc90341093a5bbe7f3ff34e6149cc18d"
                                buyer-country="PL"
                                buyer-currency="PLN"
                                wallet-params="{}"
                                page-type="product"
                                slot="button"
                                call-to-action=""
                              >
                                <button
                                  type="button"
                                  className="shopify-payment-button__button shopify-payment-button__button--unbranded"
                                >
                                  Купить
                                </button>
                              </shopify-buy-it-now-button>
                            </shopify-accelerated-checkout>{" "}
                          </div>
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

                    <pickup-availability
                      className="product__pickup-availabilities quick-add-hidden"
                      data-root-url="/"
                      data-variant-id="48819056607568"
                      data-has-only-default-variant="true"
                      data-product-page-color-scheme="gradient color-scheme-1"
                    >
                      <template>
                        <pickup-availability-preview className="pickup-availability-preview">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                            className="icon icon-unavailable"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="#DE3618"
                              stroke="#fff"
                              d="M13.94 3.94L10 7.878l-3.94-3.94A1.499 1.499 0 103.94 6.06L7.88 10l-3.94 3.94a1.499 1.499 0 102.12 2.12L10 12.12l3.94 3.94a1.497 1.497 0 002.12 0 1.499 1.499 0 000-2.12L12.122 10l3.94-3.94a1.499 1.499 0 10-2.121-2.12z"
                            ></path>
                          </svg>

                          <div className="pickup-availability-info">
                            <p className="caption-large">
                              Не удалось загрузить сведения о доступности
                              самовывоза
                            </p>
                            <button className="pickup-availability-button link link--text underlined-link">
                              Обновить
                            </button>
                          </div>
                        </pickup-availability-preview>
                      </template>
                    </pickup-availability>
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
