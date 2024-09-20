import React, { useState } from "react";

import "../../css/component-show-more.css";
import "../../css/component-swatch-input.css";
import "../../css/component-swatch.css";
import "../../css/component-facets.css";
import CategoryFilter from "./componentsFilter/CategoryFilter";
import PriceFilter from "./componentsFilter/PriceFilter";
import MenuDrawerFilter from "./componentsFilter/MenuDrawerFilter"
import ActiveFilter from "./componentsFilter/ActiveFilter";
import SortByFilter from "./componentsFilter/SortByFilter";

const Filter = ({totalCount, maxPrice}) => {
  return (
    <aside
      aria-labelledby="verticalTitle"
      className="facets-wrapper page-width"
      id="main-collection-filters"
      data-id="template--22795098620240__product-grid"
    >
      <div className="facets-container scroll-trigger animate--fade-in">
        <facet-filters-form class="facets small-hide">
          <div className="facets small-hide">
          
          <form id="FacetFiltersForm" className="facets__form">
            <div id="FacetsWrapperDesktop" className="facets__wrapper">
              <h2
                className="facets__heading caption-large text-body"
                id="verticalTitle"
                tabIndex="-1"
              >
                Фильтр:
              </h2>
              <CategoryFilter isMobile={false} /> 
              <PriceFilter maxPrice={maxPrice} />
            </div>
            <ActiveFilter FilterClass="active-facets active-facets-desktop"/>
          
            <SortByFilter />
            
            <div className="product-count light" role="status">
              <h2 className="product-count__text text-body">
                <span id="ProductCountDesktop" className="">
                Продуктов:&nbsp;{totalCount}
                </span>
              </h2>

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
            </div>
          </form>
          
          </div>
        </facet-filters-form>
        <MenuDrawerFilter maxPrice={maxPrice} totalCount={totalCount}/>
        <ActiveFilter FilterClass="active-facets active-facets-mobile medium-hide large-up-hide"/>

        <div
          className="product-count light medium-hide large-up-hide"
          role="status"
        >
          <h2 className="product-count__text text-body">
            <span id="ProductCount" className="">
              Продуктов:&nbsp;{totalCount}
            </span>
          </h2>

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
        </div>
      </div>
    </aside>
  );
};

export default Filter;
