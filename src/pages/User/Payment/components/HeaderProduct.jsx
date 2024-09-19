import { formatPrice } from "../../../../hooks/formatPrice.js";
import { React, useState } from "react";
import ProductPayment from "./ProductPayment.jsx";
import ChekOrderProduct from "./ChekOrderProduct.jsx";
import ProductTotalSum from "./ProductTotalSum.jsx";
const HeaderProduct = ({ totalsum, setTotalSum, chek, setUserData }) => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const toggleOpenHeader = () => {
    setIsOpenHeader(!isOpenHeader);
  };

  return (
    <div className={`nMPKH iYA3J ${isOpenHeader ? "undefined" : ""}`}>
      <button
        aria-pressed={isOpenHeader}
        aria-controls="disclosure_details"
        aria-expanded={isOpenHeader}
        className="WtpiW"
        onClick={toggleOpenHeader}
      >
        <span className="smIFm">
          <span>
            {isOpenHeader ? "Скрыть детали заказа" : "Показать детали заказа"}
            <div className="_16evild0 _1fragem32 _16s97g74b _16s97g77n"></div>
            <span className="a8x1wu2 a8x1wu1 _1fragemsd _1fragem2d _1fragemog _1fragemo6 a8x1wug a8x1wuk a8x1wui _1fragem32 _1fragemx5 a8x1wum a8x1wul a8x1wuy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                focusable="false"
                aria-hidden="true"
                className={`a8x1wu10 a8x1wuz _1fragem2i _1fragemsd _1fragemog _1fragemo6 _1fragemri ${
                  isOpenHeader ? "rotate-arrow-up" : ""
                }`}
                style={{
                  transform: isOpenHeader ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"
                ></path>
              </svg>
            </span>
          </span>
          <span>
            <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem5z _1fragem8c _1fragem3c _1fragemsg">
              <p
                translate="no"
                className="_1x52f9s1 _1x52f9s0 _1fragempf _1x52f9sz _1x52f9sy _1fragemrs _1x52f9s3 _1x52f9so notranslate"
              >
                {formatPrice(totalsum)} ₽
              </p>
            </div>
          </span>
        </span>
      </button>
      <div
        id="disclosure_details"
        hidden=""
        className="_94sxtb1 _94sxtb0 _1fragemnr _1fragemo1 _1fragempf _1fragemx1 _94sxtbb _94sxtb5 _1fragemwq"
        style={{
          height: isOpenHeader ? "auto" : "0px",
          overflow: isOpenHeader ? "visible" : "hidden",
          transition: "height 0.3s ease",
          maxWidth: "570px",
          margin: "0 auto",
        }}
      >
        <div className="smIFm">
          {chek ? (
            <ChekOrderProduct setUserData={setUserData} />
          ) : (
            <ProductPayment setTotalSum={setTotalSum} />
          )}
          <div className="_16s97g75p"></div>
          <div className="_16s97g75p"></div>
          <div className="_16s97g75p"></div>
          <ProductTotalSum totalsum={totalsum} />
        </div>
      </div>
    </div>
  );
};

export default HeaderProduct;
