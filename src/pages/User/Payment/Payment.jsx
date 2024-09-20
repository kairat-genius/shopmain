import { React, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { toast } from "react-toastify";
import InputPayment from "./components/InputPayment";
import "./Payment.css";
import ProductPayment from "./components/ProductPayment";
import ProductTotalSum from "./components/ProductTotalSum";

import { postMenegerOrder } from "../../../api/User/Payment/postMenegerOrder.jsx";
import HeaderProduct from "./components/HeaderProduct.jsx";
import { accessToken } from "../../../Fetch/settings.js"; 

const Payment = () => {
  const navigate = useNavigate();


  useEffect(() => {

    if (!accessToken) {
      toast.error("Пожалуйста, войдите в систему.");
      navigate("/account/login");
      return;
    }

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
  }, [navigate]);

  

  const [totalsum, setTotalSum] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [vk, setVk] = useState("");
  const [telegram, setTelegram] = useState("");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isValidURL = (url) => {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.[a-zA-Z]{2,}\/?.*$/;
    return regex.test(url);
  };

  const handleMenegerOrderSubmit = (event) => {
    event.preventDefault(); 
  
    if (!telegram && !vk) {
      toast.error("Пожалуйста, заполните хотя бы одно из полей: Телеграм или Вконтакте.");
      return; 
    }
  
    if (telegram && !isValidURL(telegram)) {
      toast.error("Введите правильный URL для Телеграм.");
      return;
    }
  
    if (vk && !isValidURL(vk)) {
      toast.error("Введите правильный URL для Вконтакте.");
      return;
    }
  
    postMenegerOrder({ telegram, vk, navigate });
  };
  return (
    <div id="app" dir="ltr">
      <div>
        <div className="g9gqqf1 _1fragemrq _1fragemxc _1fragemr2 _1fragemr6">
          <div className="_1fragem2i _1fragempf">
            <div className="cm5pp U3Rye FeQiM oYrwu _1fragemr6 _1fragemr2 _1fragemxc">
              <Header />

              <HeaderProduct totalsum={totalsum} setTotalSum={setTotalSum} chek={false}/>
              <div className="Sxi8I">
                <div className="_9F1Rf GI5Fn _1fragemr6 _1fragemr1 _1fragemxk">
                  <div className="gdtca">
                    <main id="checkout-main" className="djSdi">
                      <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem5z _1fragem4r _1fragem8c _1fragem74 _1fragem3c">
                        <form
                          action=""
                          method="POST"
                          noValidate=""
                          id="Form0"
                          className="km09ry0 _1fragem2n"
                          onSubmit={handleMenegerOrderSubmit}
                        >
                          <div className="km09ry1 _1fragempf">
                            <div className="_9QNMB">
                              <section className="_197l2ofi _197l2ofg _1fragemr6 _197l2ofp _197l2ofk _1fragemr2 _1fragemxc _1fragem2i _1fragemh8 _1fragemis _1fragemjv _1frageml5 _1fragemev _1fragemgf _1fragemm8 _1fragemni _1fragempf">
                                <div id="rTLEi"></div>
                              </section>
                              <div className="_16s97g74v _16s97g760"></div>
                            </div>

                            <div className="_1fragem2i _1fragempf">
                              <div>
                                <div>
                                  <section
                                    aria-label="Платеж"
                                    className="_197l2ofi _197l2ofg _1fragemr6 _197l2ofp _197l2ofk _1fragemr2 _1fragemxc _1fragem2i _1fragemh8 _1fragemis _1fragemjv _1frageml5 _1fragemev _1fragemgf _1fragemm8 _1fragemni _1fragempf"
                                  >
                                    <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                      <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem3w _1fragem69 _1fragem3c">
                                        <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w2">
                                          Платеж
                                        </h2>
                                        <p className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sv _1x52f9su _1fragemrq _1x52f9sp">
                                          Все транзакции защищены и зашифрованы.
                                        </p>
                                      </div>
                                      <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem50 _1fragem7d _1fragem3c">
                                        <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4v _1fragem78 _1fragem3c">
                                          <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                            <div>
                                              <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                                <fieldset id="basic">
                                                  <legend className="ezrb1p7 _1fragemwh">
                                                    Выбрать способ оплаты
                                                  </legend>
                                                  <div className="F3Yfi ezrb1p3 ezrb1p1 _1fragemr7 _1fragemxc WdG6v Ftqne rmY0Q">
                                                    <div className="weD5Q">
                                                      <label
                                                        htmlFor="basic-PAYPAL_EXPRESS"
                                                        className="uAECz jq8DA"
                                                      >
                                                        <div className="tv9Re">
                                                          <div className="_6hzjvo2 _1fragempf">
                                                            <input
                                                              type="radio"
                                                              id="basic-PAYPAL_EXPRESS"
                                                              name="basic"
                                                              className="_6hzjvo4 _6hzjvo3 _1fragemrg _1fragem2i _1fragemwu _1fragemwo _1fragemx0 _6hzjvog _6hzjvo8 _6hzjvo6 _1fragemxc _6hzjvof _6hzjvoc"
                                                            />
                                                          </div>
                                                          <div className="hSPIl">
                                                            <div>
                                                              <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemrq">
                                                                PayPal
                                                              </span>
                                                            </div>
                                                            <div className="_197l2oft _1fragemrj _1fragem2s _1fragem8h _1fragempf">
                                                              <div className="V1Rsc">
                                                                <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  fill="none"
                                                                  preserveAspectRatio="xMidYMid"
                                                                  viewBox="0 0 196 50"
                                                                  role="img"
                                                                  aria-label="PayPal"
                                                                  className="RULId"
                                                                >
                                                                  <g clipPath="url(#paypal-logo_svg__a)">
                                                                    <path
                                                                      fill="#253B80"
                                                                      fillRule="evenodd"
                                                                      d="M62.268 11.182h10.816c3.62 0 6.346 1 7.884 2.893 1.4 1.723 1.863 4.183 1.379 7.315-1.074 7.157-5.186 10.769-12.31 10.769h-3.425c-.738 0-1.37.563-1.483 1.33l-1.18 7.837c-.116.767-.745 1.33-1.485 1.33H57.3c-.555 0-.979-.516-.892-1.09l4.375-29.055c.115-.766.745-1.33 1.485-1.33Zm5.634 14.678c2.867 0 5.833 0 6.424-4.066.217-1.428.043-2.462-.525-3.158-.952-1.166-2.794-1.166-4.748-1.166h-.748c-.442 0-.822.338-.89.797L66.27 25.86zM100.235 21.664h5.179c.554 0 .976.518.887 1.09l-2.799 18.571c-.117.767-.743 1.33-1.485 1.33h-4.665c-.552 0-.976-.516-.89-1.093l.232-1.507s-2.558 3.106-7.17 3.106c-2.686 0-4.945-.812-6.523-2.76-1.721-2.12-2.425-5.158-1.93-8.336.952-6.37 5.84-10.912 11.564-10.912 2.496 0 4.996.57 6.118 2.275l.362.55.23-1.517a.91.91 0 0 1 .89-.797m-7.884 15.74c2.996 0 5.344-2.08 5.844-5.18.226-1.501-.087-2.863-.876-3.839-.788-.966-1.984-1.478-3.454-1.478-2.95 0-5.338 2.15-5.804 5.223-.244 1.507.047 2.86.812 3.812.772.958 1.974 1.463 3.478 1.463Z"
                                                                      clipRule="evenodd"
                                                                    ></path>
                                                                    <path
                                                                      fill="#253B80"
                                                                      d="M132.999 21.663h-5.204c-.497 0-.963.259-1.245.69l-7.179 11.079-3.042-10.646c-.192-.666-.779-1.123-1.443-1.123h-5.114c-.622 0-1.054.636-.856 1.25l5.733 17.625-5.39 7.97c-.424.629.003 1.492.736 1.492h5.198c.493 0 .955-.252 1.235-.676l17.312-26.178c.414-.626-.011-1.483-.741-1.483"
                                                                    ></path>
                                                                    <path
                                                                      fill="#179BD7"
                                                                      fillRule="evenodd"
                                                                      d="M139.415 11.182h10.818c3.62 0 6.345 1 7.88 2.893 1.4 1.723 1.867 4.183 1.381 7.315-1.075 7.157-5.186 10.769-12.312 10.769h-3.423c-.738 0-1.369.563-1.483 1.33l-1.242 8.237c-.08.537-.521.93-1.037.93h-5.551c-.552 0-.976-.516-.889-1.09l4.375-29.055c.115-.766.744-1.33 1.483-1.33Zm5.642 14.678c2.869 0 5.835 0 6.425-4.066.216-1.428.044-2.462-.524-3.158-.952-1.166-2.796-1.166-4.748-1.166h-.748c-.444 0-.821.338-.889.797l-1.146 7.593zM177.383 21.663h5.176c.555 0 .979.52.894 1.09l-2.801 18.572c-.116.767-.745 1.33-1.484 1.33h-4.664c-.555 0-.979-.516-.892-1.093l.231-1.508s-2.557 3.107-7.169 3.107c-2.687 0-4.942-.812-6.524-2.76-1.72-2.12-2.421-5.158-1.928-8.336.953-6.37 5.84-10.912 11.563-10.912 2.496 0 4.995.57 6.116 2.275l.364.55.229-1.518a.91.91 0 0 1 .889-.797m-7.881 15.742c2.995 0 5.347-2.081 5.844-5.181.229-1.501-.084-2.863-.877-3.84-.787-.965-1.983-1.477-3.454-1.477-2.949 0-5.334 2.149-5.804 5.222-.24 1.508.048 2.862.813 3.813.772.957 1.977 1.463 3.478 1.463"
                                                                      clipRule="evenodd"
                                                                    ></path>
                                                                    <path
                                                                      fill="#179BD7"
                                                                      d="m188.67 11.979-4.44 29.588c-.087.573.337 1.09.889 1.09h4.463c.742 0 1.371-.563 1.485-1.33l4.378-29.055c.087-.573-.337-1.092-.889-1.092h-4.998c-.441.002-.82.34-.888.799"
                                                                    ></path>
                                                                    <path
                                                                      fill="#253B80"
                                                                      d="m11.493 48.304.827-5.504-1.842-.045H1.68L7.794 2.141a.54.54 0 0 1 .17-.318.5.5 0 0 1 .327-.126h14.834c4.925 0 8.324 1.073 10.098 3.193.832.994 1.362 2.032 1.618 3.176.27 1.2.274 2.632.011 4.38l-.019.128v1.12l.832.494c.7.39 1.258.835 1.685 1.345.711.85 1.172 1.93 1.366 3.211.2 1.317.134 2.885-.194 4.66-.38 2.04-.994 3.818-1.822 5.273-.763 1.34-1.734 2.452-2.887 3.314-1.1.818-2.408 1.44-3.887 1.837-1.433.391-3.067.588-4.859.588h-1.154c-.826 0-1.628.312-2.257.87a3.7 3.7 0 0 0-1.177 2.2l-.087.496-1.46 9.7-.067.357c-.018.112-.048.169-.092.207a.24.24 0 0 1-.152.058z"
                                                                    ></path>
                                                                    <path
                                                                      fill="#179BD7"
                                                                      d="M36.451 12.703q-.066.445-.152.911c-1.956 10.523-8.65 14.158-17.197 14.158h-4.353c-1.045 0-1.926.795-2.089 1.876l-2.228 14.805L9.8 48.65c-.106.709.416 1.349 1.099 1.349h7.72c.913 0 1.69-.696 1.834-1.64l.076-.412 1.453-9.662.094-.53c.142-.948.92-1.644 1.834-1.644h1.155c7.479 0 13.334-3.181 15.045-12.387.715-3.845.345-7.056-1.547-9.314-.572-.681-1.283-1.246-2.113-1.707Z"
                                                                    ></path>
                                                                    <path
                                                                      fill="#222D65"
                                                                      d="M34.4 11.847a15 15 0 0 0-1.902-.442c-1.173-.199-2.459-.293-3.836-.293H17.034c-.286 0-.558.068-.802.19-.536.27-.934.802-1.03 1.453l-2.475 16.413-.07.479c.162-1.08 1.043-1.876 2.089-1.876h4.352c8.548 0 15.241-3.637 17.197-14.158q.087-.466.152-.91a10 10 0 0 0-1.608-.712 15 15 0 0 0-.438-.144Z"
                                                                    ></path>
                                                                    <path
                                                                      fill="#253B80"
                                                                      d="M15.205 12.756a1.93 1.93 0 0 1 1.031-1.451c.245-.123.516-.19.802-.19h11.627c1.378 0 2.663.094 3.837.292a15 15 0 0 1 2.342.585q.867.3 1.609.711c.582-3.889-.005-6.536-2.012-8.934C32.228 1.13 28.235 0 23.125 0H8.29C7.247 0 6.356.795 6.195 1.877L.015 42.91c-.121.812.477 1.544 1.258 1.544h9.159l2.3-15.284z"
                                                                    ></path>
                                                                  </g>
                                                                  <defs>
                                                                    <clipPath id="paypal-logo_svg__a">
                                                                      <path
                                                                        fill="#fff"
                                                                        d="M0 0h195.456v50H0z"
                                                                      ></path>
                                                                    </clipPath>
                                                                  </defs>
                                                                </svg>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </label>
                                                      <div
                                                        id="basic-PAYPAL_EXPRESS-collapsible"
                                                        className="_94sxtb1 _94sxtb0 _1fragemnr _1fragemo1 _1fragempf _1fragemx0 _94sxtbb _94sxtb5 _1fragemwq"
                                                        style={{
                                                          height: "0px"
                                                        }}
                                                        
                                                      >
                                                        <div>
                                                          <div className="ezrb1p8 _1fragemr6 _4lLjv">
                                                            <div className="PRlQC">
                                                              <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c _1fragemsf">
                                                                <p className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sv _1x52f9su _1fragemrq _1x52f9s9 _1x52f9s6 _1fragemwi">
                                                                  Нажмите
                                                                  «Оплатить
                                                                  через PayPal»,
                                                                  чтобы перейти
                                                                  к PayPal для
                                                                  безопасного
                                                                  завершения
                                                                  покупки.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="weD5Q TAN8h PWjbe cNWe1">
                                                      <label
                                                        htmlFor="basic-customManualPayment-126749540688"
                                                        className="uAECz ezrb1p6 ezrb1p4 _1fragemr8 jq8DA"
                                                      >
                                                        <div className="tv9Re">
                                                          <div className="_6hzjvo2 _1fragempf">
                                                            <input
                                                              type="radio"
                                                              id="basic-customManualPayment-126749540688"
                                                              name="basic"
                                                              className="_6hzjvo4 _6hzjvo3 _1fragemrg _1fragem2i _1fragemwu _1fragemwo _1fragemx0 _6hzjvog _6hzjvo8 _6hzjvo6 _1fragemxc _6hzjvof _6hzjvoc"
                                                            />
                                                          </div>
                                                          <div className="hSPIl">
                                                            <div>
                                                              <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemrq">
                                                                Оплата через
                                                                Менеджера
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </label>
                                                    </div>
                                                  </div>
                                                </fieldset>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div className="_16s97g74v _16s97g760"></div>
                                </div>
                              </div>
                              <div>
                                <section className="_197l2ofi _197l2ofg _1fragemr6 _197l2ofp _197l2ofk _1fragemr2 _1fragemxc _1fragem2i _1fragemh8 _1fragemis _1fragemjv _1frageml5 _1fragemev _1fragemgf _1fragemm8 _1fragemni _1fragempf">
                                  <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem5z _1fragem8c _1fragem3c">
                                    <div>
                                      <div>
                                        <div>
                                          <div className="bSo96">
                                            <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w2">
                                              Контактная информация
                                            </h2>
                                          </div>
                                          <div className="_16s97g75f"></div>
                                          <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                            <InputPayment
                                              placeholder="Телеграм"
                                              name="telegram"
                                              value={telegram}
                                              onChange={(e) =>
                                                setTelegram(e.target.value)
                                              }
                                            />
                                            <InputPayment
                                              placeholder="Вконтакте"
                                              name="vk"
                                              value={vk}
                                              onChange={(e) =>
                                                setVk(e.target.value)
                                              }
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div></div>
                                    <div className="_1fragem2i _1fragem3p _1fragempf"></div>
                                  </div>
                                </section>
                                <div className="_16s97g74v _16s97g760"></div>
                                
                              </div>
                              <div>
                                <div>
                                  <section className="_197l2ofi _197l2ofg _1fragemr6 _197l2ofp _197l2ofk _1fragemr2 _1fragemxc _1fragem2i _1fragemh8 _1fragemis _1fragemjv _1frageml5 _1fragemev _1fragemgf _1fragemm8 _1fragemni _1fragempf">
                                    <div className="_1fragem2i _1fragem3p _1fragempf qReyn">
                                      <button
                                        onClick={toggleOpen}
                                        type="button"
                                        className="_1xqelvi1 _1xqelvi0 _1fragemrg _1fragempf _1fragemwk _1fragemwu _1fragemwp _1fragemx4 _1fragemwe _1fragem2i _1fragemir _1frageml4 _1fragemf5 _1fragemnh _1xqelvi8"
                                      >
                                        <div
                                          className="_1mrl40q0 _1fragempf _1fragem4g _1fragem6t _1fragemq4 _1fragemq8 _1fragem3c _1fragempu _1fragem8w _1fragemsh _16s97g7f _16s97g7p _16s97g71j _16s97g71t"
                                          style={{
                                            "--_16s97g7a": "1fr",
                                            "--_16s97g7k": "minmax(0, 1fr)",
                                            "--_16s97g71e":
                                              "minmax(0, 1fr) minmax(auto, max-content)",
                                            "--_16s97g71o": "minmax(0, 1fr)",
                                          }}
                                        >
                                          <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w2">
                                            Детали заказа
                                            
                                          </h2>
                                          <div className="WPQk2">
                                            <div
                                              className="_1mrl40q0 _1fragempf _1fragem46 _1fragem6j _1fragemq4 _1fragemq8 _1fragem3c _1fragempu _16s97g7f _16s97g7p _16s97g71j _16s97g71t"
                                              style={{
                                                "--_16s97g7a": "1fr",
                                                "--_16s97g7k": "minmax(0, 1fr)",
                                                "--_16s97g71e":
                                                  "minmax(0, 1fr) minmax(auto, max-content)",
                                                "--_16s97g71o":
                                                  "minmax(0, 1fr)",
                                              }}
                                            >
                                              <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemrq">
                                                {isOpen ? "Скрыть" : "Показать"}
                                              </span>
                                              <span className="a8x1wu2 a8x1wu1 _1fragemsd _1fragem2d _1fragemog _1fragemo6 a8x1wu9 a8x1wuj a8x1wuh _1fragem2i a8x1wum a8x1wul a8x1wuy">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 14 14"
                                                  focusable="false"
                                                  aria-hidden="true"
                                                  className={`a8x1wu10 a8x1wuz _1fragem2i _1fragemsd _1fragemog _1fragemo6 _1fragemri ${
                                                    isOpen
                                                      ? "rotate-arrow-up"
                                                      : ""
                                                  }`} // класс для вращения стрелки
                                                  style={{
                                                    transform: isOpen
                                                      ? "rotate(180deg)"
                                                      : "rotate(0deg)", // стиль для поворота
                                                    transition:
                                                      "transform 0.3s ease",
                                                  }}
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"
                                                  ></path>
                                                </svg>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </button>
                                      <div
                                        id="mobileOrderSummary"
                                        className="_94sxtb1 _94sxtb0 _1fragemnr _1fragemo1 _1fragempf _1fragemx1 _94sxtbb _94sxtb5 _1fragemwq"
                                        style={{
                                          height: isOpen ? "auto" : "0px",
                                          overflow: isOpen
                                            ? "visible"
                                            : "hidden",
                                          transition: "height 0.3s ease",
                                        }}
                                      >
                                        <div>
                                          <ProductPayment
                                            setTotalSum={setTotalSum}
                                          />
                                        </div>
                                      </div>
                                      <div className="_16s97g75p"></div>
                                      <ProductTotalSum totalsum={totalsum} />
                                    </div>
                                    <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem50 _1fragem7d _1fragem3c">
                                      <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                        <div className="_1fragem3m _1fragem2l _1fragempf"></div>
                                      </div>
                                      <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem50 _1fragem7d _1fragem3c">
                                        <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                          <div className="_1fragem3m _1fragem2l _1fragempf"></div>
                                        </div>
                                        <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4q _1fragem73 _1fragem3c">
                                          <div>
                                            <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4g _1fragem6t _1fragem3c">
                                              <div>
                                                <button
                                                  id="checkout-pay-button"
                                                  type="submit"
                                                  className="_1m2hr9ge _1m2hr9gd _1fragemx4 _1fragempf _1fragemrg _1fragem32 _1fragemwk _1fragemwv _1fragemwz _1fragemwp _1m2hr9g1h _1m2hr9g1d _1fragemra _1m2hr9g16 _1m2hr9g13 _1fragemsp _1fragemsn _1fragemsr _1fragemsl _1fragemtl _1fragemth _1fragemtp _1fragemtd _1fragemcs _1fragemc3 _1fragemdh _1fragembe _1fragemwp _1m2hr9g1q _1m2hr9g1o _1m2hr9g10 _1m2hr9gx _1m2hr9g12 _1m2hr9g11 _1fragemvy _1m2hr9g1b _1m2hr9g19 _1fragemwl"
                                                >
                                                  <span className="_1m2hr9gr _1m2hr9gq _1fragemwg _1fragemwy _1fragemwq _1fragemwz _1m2hr9gn _1m2hr9gl _1fragem2s _1fragem8h _1fragemwi">
                                                    <span className="_19gi7yt0 _19gi7yt10 _19gi7ytz _1fragemrs">
                                                      Завершить заказ
                                                    </span>
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="_16s97g75k"></div>
                                    <div className="_197l2oft _1fragemrj _1fragemq8 _1fragem2s _1fragempf"></div>
                                    <div className="_1fragem3m _1fragem2k _1fragempf">
                                      <div className="_16s97g75f"></div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="_197l2of1e _1fragemwh _1fragem2i _1fragempf">
                            <button
                              type="submit"
                              tabIndex="-1"
                              aria-hidden="true"
                            >
                              Отправить
                            </button>
                          </div>
                        </form>
                      </div>
                    </main>
                    <Footer />
                  </div>
                </div>
                <div className="i4DWM _1fragemr6 _1fragemr3 _1fragemxc">
                  <div className="_4QenE">
                    <div className="_1fragemwh">
                      <h2 className="n8k95w1 n8k95w0 _1fragempf n8k95w3">
                        Детали заказа
                      </h2>
                    </div>
                    <aside>
                      <ProductPayment setTotalSum={setTotalSum} />
                      <div className="_16s97g75p"></div>
                      <div className="_16s97g75p"></div>
                      <div className="_16s97g75p"></div>

                      <ProductTotalSum totalsum={totalsum} />
                    </aside>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
