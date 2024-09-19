import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ModilePriceFilter = ({ maxPrice, isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [priceGte, setPriceGte] = useState("");
  const [priceLte, setPriceLte] = useState("");

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    if (name === "price_from") {
      setPriceGte(value.replace(/[^\d]/g, "")); // только цифры
    } else if (name === "price_to") {
      setPriceLte(value.replace(/[^\d]/g, "")); // только цифры
    }
  };

  const updateURL = () => {
    // Получаем текущие параметры URL
    const searchParams = new URLSearchParams(location.search);

    // Обновляем параметры цены
    if (priceGte) {
      searchParams.set("price_from", parseInt(priceGte, 10));
    } else {
      searchParams.delete("price_from");
    }
    if (priceLte) {
      searchParams.set("price_to", parseInt(priceLte, 10));
    } else {
      searchParams.delete("price_to");
    }

    // Обновляем URL с сохранением других параметров
    navigate(`/collections/all?${searchParams.toString()}`);
  };

  const handleReset = () => {
    // Очищаем параметры цены, но сохраняем остальные фильтры
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("price_from");
    searchParams.delete("price_to");

    navigate(`/collections/all?${searchParams.toString()}`);
  };

  return (
    <details
      id="Details-Mobile-filter.v.price-template--22795098620240__product-grid"
      data-index="mobile-2"
      className={`mobile-facets__details js-filter ${
        isOpen ? "menu-opening" : ""
      }`}
    >
      <summary
        className="mobile-facets__summary focus-inset"
        aria-expanded={isOpen}
      >
        <div>
          <span>Price</span>
          <span className="mobile-facets__arrow">
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
          </span>
        </div>
      </summary>
      <div
        id="FacetMobile-2-template--22795098620240__product-grid"
        className="mobile-facets__submenu gradient"
      >
        <p className="mobile-facets__info">Максимальная цена: {maxPrice} ₽</p>

        <price-range>
          <div class="facets__price">
          <span className="field-currency">₽</span>

          <div className="field">
            <input
              className="field__input"
              name="filter.v.price.gte"
              id="Mobile-Filter-Price-GTE"
              value={priceGte}
              type="text"
              inputMode="decimal"
              placeholder="0"
              data-pattern="\d| |,|\."
              onChange={handlePriceChange}
              onBlur={updateURL}
            />
            <label className="field__label" htmlFor="Mobile-Filter-Price-GTE">
              От
            </label>
          </div>
          <span className="field-currency">₽</span>
          <div className="field">
            <input
              className="field__input"
              name="filter.v.price.lte"
              id="Mobile-Filter-Price-LTE"
              value={priceLte}
              type="text"
              inputMode="decimal"
              placeholder={maxPrice}
              data-pattern="\d| |,|\."
              data-min="231,00"
              data-max={maxPrice}
              onChange={handlePriceChange}
              onBlur={updateURL}
            />
            <label className="field__label" htmlFor="Mobile-Filter-Price-LTE">
              Для
            </label>
          </div>
          </div>
        </price-range>

      </div>
    </details>
  );
};

export default ModilePriceFilter;
