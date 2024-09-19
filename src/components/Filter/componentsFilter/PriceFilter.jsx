import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { formatPrice } from "../../../hooks/formatPrice";
const PriceFilter = ({ maxPrice }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [priceGte, setPriceGte] = useState('');
  const [priceLte, setPriceLte] = useState('');

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    if (name === "price_from") {
      setPriceGte(value.replace(/[^\d]/g, '')); // только цифры
    } else if (name === "price_to") {
      setPriceLte(value.replace(/[^\d]/g, '')); // только цифры
    }
  };

  const updateURL = () => {
    // Получаем текущие параметры URL
    const searchParams = new URLSearchParams(location.search);

    // Обновляем параметры цены
    if (priceGte) {
      searchParams.set('price_from', parseInt(priceGte, 10));
    } else {
      searchParams.delete('price_from');
    }
    if (priceLte) {
      searchParams.set('price_to', parseInt(priceLte, 10));
    } else {
      searchParams.delete('price_to');
    }

    // Обновляем URL с сохранением других параметров
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleReset = () => {
    // Очищаем параметры цены, но сохраняем остальные фильтры
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete('price_from');
    searchParams.delete('price_to');

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <details
      id="Details-filter.v.price-template--22795098620240__product-grid"
      className="disclosure-has-popup facets__disclosure js-filter"
      data-index="2"
    >
      <summary className="facets__summary caption-large focus-offset">
        <div>
          <span>Price</span>
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
        </div>
      </summary>
      <div
        id="Facet-2-template--22795098620240__product-grid"
        className="facets__display"
      >
        <div className="facets__header">
          <span className="facets__selected">
            Максимальная цена: {formatPrice(maxPrice)} ₽
          </span>
          <facet-remove>
            <a
            href="#"
              className="facets__reset link underlined-link"
              
              role="button"
              onClick={handleReset}
            >
              Сбросить
            </a>
          </facet-remove>
        </div>
        <price-range>
          <div className="facets__price">
            <span className="field-currency">₽</span>

            <div className="field">
              <input
                className="field__input"
                name="price_from"
                id="Filter-Price-GTE"
                value={priceGte}
                type="number"
                placeholder="0"
                min="0"
                onChange={handlePriceChange}
                onBlur={updateURL}
              />
              <label className="field__label" htmlFor="Filter-Price-GTE">
                От
              </label>
            </div>
            <span className="field-currency">₽</span>
            <div className="field">
              <input
                className="field__input"
                name="price_to"
                id="Filter-Price-LTE"
                value={priceLte}
                type="number"
                placeholder="3.999"
                min="0"
                onChange={handlePriceChange}
                onBlur={updateURL}
              />
              <label className="field__label" htmlFor="Filter-Price-LTE">
                Для
              </label>
            </div>
          </div>
        </price-range>
      </div>
    </details>
  );
};

export default PriceFilter;
