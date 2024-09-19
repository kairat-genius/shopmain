import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ActiveFilter = ({ FilterClass }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    let filters = {};

    if (params.has("category")) {
      filters.category = params.get("category");
    }

    if (params.has("price_from") || params.has("price_to")) {
      const priceFrom = params.get("price_from") || "0";
      const priceTo = params.get("price_to") || "3.999,00";
      filters.priceRange = `${priceFrom},00 ₽ - ${priceTo},00 ₽`;
    }

    return filters;
  };

  const filters = getQueryParams();

  const removeAllFilters = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("category");
    searchParams.delete("price_from");
    searchParams.delete("price_to");
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className={FilterClass}>
      {filters.category && (
        <facet-remove>
          <a
            href="#"
            className="active-facets__button active-facets__button--light"
            role="button"
            onClick={() => {
              const searchParams = new URLSearchParams(location.search);
              searchParams.delete("category");
              navigate(`?${searchParams.toString()}`);
            }}
          >
            <span className="active-facets__button-inner button button--tertiary">
              Категории: {filters.category}
              <svg
                aria-hidden="true"
                focusable="false"
                width="12"
                height="13"
                className="icon icon-close-small"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.48627 9.32917L2.82849 3.67098"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2.88539 9.38504L8.42932 3.61524"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="visually-hidden">Снять фильтр</span>
            </span>
          </a>
        </facet-remove>
      )}

      {filters.priceRange && (
        <facet-remove>
          <a
            href="#"
            className="active-facets__button active-facets__button--light"
            role="button"
            onClick={() => {
              // Удаляем оба параметра цены
              const searchParams = new URLSearchParams(location.search);
              searchParams.delete("price_from");
              searchParams.delete("price_to");
              navigate(`?${searchParams.toString()}`);
            }}
          >
            <span className="active-facets__button-inner button button--tertiary">
              {filters.priceRange}
              <svg
                aria-hidden="true"
                focusable="false"
                width="12"
                height="13"
                className="icon icon-close-small"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.48627 9.32917L2.82849 3.67098"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2.88539 9.38504L8.42932 3.61524"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="visually-hidden">Снять фильтр</span>
            </span>
          </a>
        </facet-remove>
      )}

      {(filters.category || filters.priceRange) && (
        <facet-remove>
          <div className="active-facets__button-wrapper">
            <a
              href="#"
              className="active-facets__button-remove underlined-link"
              role="button"
              onClick={removeAllFilters}
            >
              <span>Удалить все</span>
            </a>
          </div>
        </facet-remove>
      )}
    </div>
  );
};

export default ActiveFilter;
