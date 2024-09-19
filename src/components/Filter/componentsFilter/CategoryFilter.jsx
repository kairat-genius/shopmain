import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryFilterItem from "./CategoryFilterItem/CategoryFilterItem";

const CategoryFilter = ({ isMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterItems = [
    { label: "Готовые сборки", checked: selectedCategory === "Готовые сборки", disabled: false },
    { label: "Готовые плагины", checked: selectedCategory === "Готовые плагины", disabled: false },
    { label: "Дизайн", checked: selectedCategory === "Дизайн", disabled: false },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    const searchParams = new URLSearchParams(location.search);

    if (category) {
      searchParams.set("category", category);
    } else {
      searchParams.delete("category");
    }

    navigate(`?${searchParams.toString()}`);
  };

  const handleReset = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("category");

    setSelectedCategory("");
    navigate(`/collections/all?${searchParams.toString()}`);
  };

  return (
    <details
      id={isMobile ? "Details-Mobile-filter" : "Details-filter.v.availability-template--22795098620240__product-grid"}
      className={isMobile ? "mobile-facets__details js-filter" : "disclosure-has-popup facets__disclosure js-filter"}
      data-index={isMobile ? "mobile-1" : "1"}
      open=""
    >
      <summary
        className={isMobile ? "mobile-facets__summary focus-inset" : "facets__summary caption-large focus-offset"}
        aria-label={`Категории (Выбрано: ${selectedCategory})`}
        role="button"
        aria-expanded="true"
        aria-controls={isMobile ? "FacetMobile-1-template--22795098620240__product-grid" : "Facet-1-template--22795098620240__product-grid"}
      >
        <div>
          <span>Категории</span>
          <span className={isMobile ? "mobile-facets__arrow" : ""} style={{paddingLeft: '5px'}}>
            <svg
              aria-hidden="true"
              focusable="false"
              className={isMobile ? "icon icon-arrow" : "icon icon-caret"}
              d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
              viewBox={isMobile ? "0 0 14 10" : "0 0 10 6"}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={isMobile ? "M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" : "M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"}
                fill="currentColor"
              ></path>
                         </svg>
          </span>
        </div>
      </summary>
      <div
        id={isMobile ? "FacetMobile-1-template--22795098620240__product-grid" : "Facet-1-template--22795098620240__product-grid"}
        className={isMobile ? "mobile-facets__submenu gradient" : "parent-display facets__display"}
      >
        <div className="facets__header">
          <div>
            <span className="facets__selected">Выбрано: {selectedCategory}</span>
          </div>
          <facet-remove>
            <a
              href="#"
              className={isMobile ? "mobile-facets__clear underlined-link" : "facets__reset link underlined-link"}
              role="button"
              onClick={handleReset}
            >
              Сбросить
            </a>
          </facet-remove>
        </div>
        <fieldset className="facets-wrap parent-wrap">
          <legend className="visually-hidden">Категории</legend>
          <ul
            className={isMobile ? "facets-layout facets-layout-list facets-layout-list--text mobile-facets__list list-unstyled" : "facets-layout facets-layout-list facets-layout-list--text facets__list list-unstyled"}
            role="list"
          >
            {filterItems.map((item, index) => (
              <CategoryFilterItem
                key={index}
                label={item.label}
                checked={item.checked}
                disabled={item.disabled}
                onChange={handleCategoryChange}
                FilterClass={isMobile ? "mobile-facets__item list-menu__item" : "list-menu__item facets__item"}
              />
            ))}
          </ul>
        </fieldset>
  
      </div>
    </details>
  );
};

export default CategoryFilter;

