import { React, useEffect, useState } from "react";
import { formatPrice } from "../../../hooks/formatPrice.js";
import "./css/app.DAbGWbK7.css";
import "./css/ButtonWithRegisterWebPixel.B6bwbcOx.css";
import "./css/DeliveryMethodSelectorSection.2CoGBgSI.css";
import "./css/DutyOptions.Bd1Z60K2.css";
import "./css/google-pay.D-Ox6Dnf.css";
import "./css/LegacyVaultedShippingMethods.DytT_hpK.css";
import "./css/NoAddressLocationFullDetour.DU8rC2PR.css";
import "./css/OptionDetails.BgrbqXV7.css";
import "./css/PayButtonSection.DF7trkKf.css";
import "./css/PayPalExpressButton.h-S8x8hC.css";
import "./css/PayPalExpressPaymentMethod.DQ8O1Rwh.css";
import "./css/PickupPointCarrierLogo.VSphTxMd.css";
import "./css/Rollup.o9Mx-fKL.css";
import "./css/Section.sQehCocD.css";
import "./css/ShopPayLogo.D_HPU8Dh.css";
import "./css/ShopPayVerificationSwitch.CAxiAssW.css";
import "./css/StockProblemsLineItemList.CxdIQKjw.css";
import "./css/SubscriptionPriceBreakdown.Bqs0s4oM.css";
import "./css/useUnauthenticatedErrorModal.DnkQ4tsk.css";
import "./css/VaultedContact.CxMuAABI.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ChekOrderProduct from "./components/ChekOrderProduct";
import HeaderProduct from "./components/HeaderProduct.jsx";
import ProductTotalSum from "./components/ProductTotalSum.jsx";

import "./Payment.css";

const ManagerPayment = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // удалить тег <style> с индексом стилей
    const styleTag = document.querySelector(
      'style[data-vite-dev-id*="index.css"]'
    );
    if (styleTag) {
      styleTag.remove();
    }

    // Очистка компонента
    return () => {
      const styleTag = document.querySelector(
        'style[data-vite-dev-id*="index.css"]'
      );
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, []);

  const translations = {
    Manager: 'Менеджера',
    
  };

  const paymentMethodText = translations[userData.paymentMethod] || userData.paymentMethod;

  return (
    <div id="app" dir="ltr">
      <div>
        <div className="g9gqqf1 _1fragemrq _1fragemxc _1fragemr2 _1fragemr6">
          <div className="g9gqqf1 g9gqqf0 _1fragemrq g9gqqfc g9gqqfa _1fragemxd g9gqqf6 g9gqqf2 _1fragemr2 _1fragemr6">
            <div className="cm5pp U3Rye FeQiM oYrwu _1fragemr6 _1fragemr2 _1fragemxd">
              <Header />
              <HeaderProduct totalsum={userData.amount} setUserData={setUserData} chek={true}/>

              <div className="Sxi8I">
                <div className="_9F1Rf GI5Fn _1fragemr6 _1fragemr1 _1fragemxl">
                  <div className="gdtca">
                    <main id="checkout-main" className="djSdi">
                      <div className="_1fragem2i _1fragemhn _1fragemit _1fragemjl _1frageml6 _1fragemfa _1fragemgg _1fragemly _1fragemnj _1fragempf">
                        <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4v _1fragem58 _1fragem78 _1fragem7l _1fragem3c">
                          <div className="_5uqybw0 _1fragempf _1fragem2s _1fragem8w">
                            <header className="_5uqybw2 _5uqybw1 _1fragem2s _1fragemol _1fragem4g _1fragem6t _1fragemq4 _1fragemq8 _1fragem8w">
                              <div
                                className="_1fragem2i _1fragempf _16s97g73h _16s97g73r _16s97g741 _16s97g74b"
                                style={{
                                  "--_16s97g73c": "4.8rem",
                                  "--_16s97g73m": "4.8rem",
                                  "--_16s97g73w": "4.8rem",
                                  "--_16s97g746": "4.8rem",
                                }}
                              >
                                
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 50 50"
                                    focusable="false"
                                    aria-hidden="true"
                                    style={{
                                      color: "var(--x-default-color-accent)",
                                    }}
                                  >
                                    <path
                                      strokeWidth="2"
                                      d="M49 25c0 13.255-10.745 24-24 24S1 38.255 1 25 11.745 1 25 1s24 10.745 24 24Z"
                                      style={{ stroke: "currentcolor" }}
                                    ></path>
                                    <path
                                      strokeWidth="2"
                                      d="m15 24.511 7.307 7.307L35.125 19"
                                      style={{ stroke: "currentcolor" }}
                                    ></path>
                                  </svg>
                                
                                 
                              </div>
                              <div className="_1fragem2i _1fragempf">
                                <p className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sv _1x52f9su _1fragemrq _1x52f9sp">
                                  Подтверждение №{userData.orderNumber}
                                </p>
                                <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w2">
                                  Спасибо, {userData.user?.login || "Не указан"}
                                  !
                                </h2>
                              </div>
                            </header>
                          </div>
                          <div className="_1fragem2i _1fragempf">
                            <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4v _1fragem78 _1fragem3c">
                              <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                <section
                                  aria-label="Ваш заказ подтвержден"
                                  className="_197l2ofj _197l2ofh _1fragemr7 _197l2of1g _197l2of1f _1fragemnr _1fragemo1 _1fragemsu _1fragemsz _1fragemt9 _1fragemt4 _1fragemaf _1fragem9v _1fragemaz _1fragem9b _1fragemxd _1fragem2i _1fragempf"
                                >
                                  <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragemh8 _1fragemjl _1fragemev _1fragemly _1fragemaa _1fragem9q _1fragemau _1fragem96 _1fragem3c">
                                    <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w3">
                                      Ваш заказ {userData.paid ? "подтвержден" : "ожидает подтверждения"}
                                      
                                    </h2>
                                    <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem41 _1fragem6e _1fragem3c">
                                      <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemrq">
                                        Вскоре вы получите электронное письмо с
                                        подтверждением и номером заказа.
                                      </span>
                                    </div>
                                  </div>
                                </section>
                                <section
                                  aria-label="Данные заказа"
                                  className="_197l2ofj _197l2ofh _1fragemr7 _1fragemsu _1fragemsz _1fragemt9 _1fragemt4 _1fragemaf _1fragem9v _1fragemaz _1fragem9b _1fragemxd _1fragem2i _1fragempf"
                                >
                                  <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragemh8 _1fragemjl _1fragemev _1fragemly _1fragem3c">
                                    <div
                                      className="_1mrl40q0 _1fragempf _1fragem5z _1fragem8c _1fragem3c _1fragempu _1fragem8r _1fragemsg _16s97g7f _16s97g7p _16s97g71j _16s97g71t"
                                      style={{
                                        "--_16s97g7a": "1fr",
                                        "--_16s97g7k": "minmax(0, 1fr)",
                                        "--_16s97g71e":
                                          "minmax(auto, max-content) minmax(0, 1fr)",
                                        "--_16s97g71o": "minmax(0, 1fr)",
                                      }}
                                    >
                                      <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w3">
                                        Данные заказа
                                      </h2>
                                    </div>
                                    <div
                                      className="_1mrl40q0 _1fragempf _1fragem46 _1fragem6j _1fragem3c _1fragempz _16s97g7f _16s97g7h _16s97g7p _16s97g71j _16s97g71l _16s97g71t"
                                      style={{
                                        "--_16s97g7a": "minmax(0, 1fr)",
                                        "--_16s97g7c": "1fr",
                                        "--_16s97g7k": "1fr",
                                        "--_16s97g71e": "minmax(0, 1fr)",
                                        "--_16s97g71g":
                                          "minmax(0, 1fr) minmax(0, 1fr)",
                                        "--_16s97g71o":
                                          "minmax(auto, max-content)",
                                      }}
                                    >
                                      <section className="_1fragem2i _1fragempf">
                                        <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                          <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem46 _1fragem6j _1fragem3c">
                                            <h3 className="n8k95w1 n8k95w0 _1fragempf n8k95w4">
                                              Контактная информация
                                            </h3>
                                            <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem5z _1fragem8c _1fragem3c">
                                              <p className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sv _1x52f9su _1fragemrq">
                                                {userData.user?.email ||
                                                  "Не указан"}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      <section className="_1fragem2i _1fragempf">
                                        <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                          <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem46 _1fragem6j _1fragem3c">
                                            <h3 className="n8k95w1 n8k95w0 _1fragempf n8k95w4">
                                              Способы оплаты
                                            </h3>
                                            <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem46 _1fragem6j _1fragem3c">
                                              <div className="_5uqybw0 _1fragempf _1fragem2s _1fragem8w">
                                                <div className="_5uqybw2 _5uqybw1 _1fragem2s _1fragemol _1fragem46 _1fragem6j _1fragemq4 _1fragemq8 _1fragem8w">
                                                  <img
                                                    alt="cash"
                                                    src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/assets/cash.CCRlfyUl.svg"
                                                    role="img"
                                                    width="38"
                                                    height="24"
                                                    className="_1tgdqw61 _1tgdqw60 _1fragemwu _1fragemwp _1fragemx4 _1fragemsc _1tgdqw66"
                                                  />
                                                  <p className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sv _1x52f9su _1fragemrq">
                                                    Оплата через{" "}
                                                    {paymentMethodText}
                                                    
                                                    <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemrq">
                                                      {" "}
                                                      {formatPrice(
                                                        userData.amount
                                                      )}{" "}
                                                      {userData.currency}
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem46 _1fragem6j _1fragem3c"></div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </section>
                              </div>
                              <div className="MV9Am">
                                <div>
                                  <a
                                    href="/"
                                    className="_1m2hr9ge _1m2hr9gd _1fragemx5 _1fragempf _1fragemrg _1fragem32 _1fragemwk _1fragemwv _1fragemx0 _1fragemwp _1m2hr9g1h _1m2hr9g1d _1fragemra _1m2hr9g16 _1m2hr9g13 _1fragemsp _1fragemsn _1fragemsr _1fragemsl _1fragemtl _1fragemth _1fragemtp _1fragemtd _1fragemcs _1fragemc3 _1fragemdh _1fragembe _1fragemwp _1m2hr9g1r _1m2hr9g1o _1m2hr9g10 _1m2hr9gx _1m2hr9g12 _1m2hr9g11 _1fragemvy _1m2hr9g1b _1m2hr9g19 _1fragemwl"
                                  >
                                    <span className="_1m2hr9gr _1m2hr9gq _1fragemwg _1fragemww _1fragemwq _1fragemx0 _1m2hr9gn _1m2hr9gl _1fragem2s _1fragem8h _1fragemwi">
                                      Продолжить покупки
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <p className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sv _1x52f9su _1fragemrq _1x52f9s9 _1x52f9s6 _1fragemwi">
                                    <span className="go06b0">
                                      <span>
                                        Нужна помощь?{" "}
                                        <span id="replacement-thank_you.contact_us_html-1f9dfd76a8117f-db8a077f261f5-134a2c02def023-19a6cc4ea89e8b-0">
                                          <a
                                            href="mailto:nikita.www9@gmail.com"
                                            className="s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx4 _1fragemwp s2kwpi2 s2kwpi6 s2kwpi4 _1fragemwm"
                                          >
                                            Свяжитесь с нами
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                    <Footer />
                  </div>
                </div>
                <div className="i4DWM _1fragemr6 _1fragemr3 _1fragemxd">
                  <div className="_4QenE">
                    <div className="_1fragemwh">
                      <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w3">
                        Детали заказа
                      </h2>
                    </div>
                    <aside>
                      <ChekOrderProduct setUserData={setUserData} />
                      <div className="_16s97g75p"></div>
                      <div className="_16s97g75p"></div>
                      <div className="_16s97g75p"></div>
                      <ProductTotalSum  totalsum={userData.amount}/>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
            <div id="PortalHost"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagerPayment;
