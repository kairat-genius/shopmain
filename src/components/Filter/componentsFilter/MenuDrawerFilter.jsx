import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import ModilePriceFilter from "./ModilePriceFilter";
import SortByFilter from "./SortByFilter";
import { useLocation, useNavigate } from "react-router-dom";
const MenuDrawerFilter = ({ maxPrice, totalCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для отслеживания открытия/закрытия <details>
  const handleToggle = (event) => {
    setIsOpen(event.target.hasAttribute("open"));
  };

  useEffect(() => {
    const details = document.getElementById(
      "Details-Mobile-filter.v.price-template--22795098620240__product-grid"
    );
    details.addEventListener("toggle", handleToggle);

    // Удаление слушателя при размонтировании компонента
    return () => {
      details.removeEventListener("toggle", handleToggle);
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sortBy = params.get('sort_by') || '';
    setSelectedSort(sortBy);
  }, [location.search]);

  const handleChange = (event) => {
    const value = event.target.value;
    const params = new URLSearchParams(location.search);

    params.set('sort_by', value);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <menu-drawer data-breakpoint="mobile">
      <div
        className="mobile-facets__wrapper medium-hide large-up-hide"
        data-breakpoint="mobile"
      >
        <details className="mobile-facets__disclosure disclosure-has-popup">
          <summary className="mobile-facets__open-wrapper focus-offset">
            <span className="mobile-facets__open">
              <svg
                className="icon icon-filter"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="mobile-facets__open-label button-label medium-hide large-up-hide">
                Фильтр и сортировка
              </span>
              <span className="mobile-facets__open-label button-label small-hide">
                Фильтровать
              </span>
            </span>
            <span tabIndex="0" className="mobile-facets__close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                className="icon icon-close"
                fill="none"
                viewBox="0 0 18 17"
              >
                <path
                  d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </summary>
          <facet-filters-form>
            <form id="FacetFiltersFormMobile" className="mobile-facets">
              <div className="mobile-facets__inner gradient">
                <div className="mobile-facets__header">
                  <div className="mobile-facets__header-inner">
                    <h2 className="mobile-facets__heading medium-hide large-up-hide">
                      Фильтр и сортировка
                    </h2>
                    <h2 className="mobile-facets__heading small-hide">
                      Фильтровать
                    </h2>
                    <p className="mobile-facets__count">
                      Продуктов:&nbsp;{totalCount}
                    </p>
                  </div>
                </div>
                <div
                  id="FacetsWrapperMobile"
                  className={`mobile-facets__main has-submenu ${
                    isOpen ? "submenu-open" : ""
                  }`}
                >
                  <CategoryFilter isMobile={true} />

                  <ModilePriceFilter maxPrice={maxPrice} isOpen={isOpen} />

                  <div
                    id="Details-Mobile-SortBy-template--22795098620240__product-grid"
                    className="mobile-facets__details js-filter"
                    data-index="mobile-"
                  >
                    <div className="mobile-facets__summary">
                      <div className="mobile-facets__sort">
                        <label htmlFor="SortBy-mobile">Сортировка:</label>
                        <div className="select">
                          <select
                            name="sort_by"
                            className="select__select"
                            id="SortBy-mobile"
                            aria-describedby="a11y-refresh-page-message"
                            onChange={handleChange}
                            value={selectedSort}
                          >
                            <option value="">Рекомендуется</option>
                            <option value="top_seller">Лидер продаж</option>
                            <option value="a_to_z">От А до Я</option>
                            <option value="z_to_a">От Я до А</option>
                            <option value="price_asc">
                              По возрастанию цены
                            </option>
                            <option value="price_desc">По убыванию цены</option>
                            <option value="oldest">Сначала старые</option>
                            <option value="newest">Сначала новые</option>
                          </select>
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
                      </div>
                    </div>
                  </div>
           
                  <div
                    className="mobile-facets__footer"
                    style={{ marginTop: "600px", display: "block" }}
                  >
                    <facet-remove>
                      <div className="mobile-facets__clear-wrapper">
                        <a
                          href="/collections/all"
                          className="mobile-facets__clear underlined-link"
                          role="button"
                        >
                          Удалить все
                        </a>
                      </div>
                    </facet-remove>
                  </div>
                </div>
              </div>
            </form>
          </facet-filters-form>
        </details>
      </div>
    </menu-drawer>
  );
};

export default MenuDrawerFilter;
