import React from "react";
import Filter from "../../../components/Filter/Filter";
import { formatPrice } from "../../../hooks/formatPrice";

import "./ProductGrid.css";
import "./../../../css/component-card.css";
import "./../../../css/template-collection.css";
import "./../../../css/component-price.css";
import "./../../../css/component-facets.css";
import "./../../../css/component-show-more.css";
import "./../../../css/component-swatch-input.css";
import "./../../../css/component-swatch.css";

import "./../../../css/component-rating.css";
import "./../../../css/component-volume-pricing.css";
import "./../../../css/quick-order-list.css";
import "./../../../css/quantity-popover.css";
import Pagination from "../../../components/Pagination/Pagination";

const ProductGrid = ({
  data,
  currentPage,
  totalPages,
  handlePageChange,
  totalCount,
  maxPrice,
}) => {
  return (
    <div
      id="shopify-section-template--22795098620240__product-grid"
      className="shopify-section section"
    >
      <div className="section-template--22795098620240__product-grid-padding gradient color-scheme-1">
        <div className="">
          <Filter totalCount={totalCount} maxPrice={maxPrice} />
          <div
            className="product-grid-container scroll-trigger animate--slide-in"
            id="ProductGridContainer"
            data-cascade=""
          >
             {totalCount === 0 ? (
            <div
              className="product-grid-container scroll-trigger animate--slide-in"
              id="ProductGridContainer"
              data-cascade=""
            >
              <div
                className="collection collection--empty page-width"
                id="product-grid"
                data-id="template--22795098620240__product-grid"
              >
                <div className="loading-overlay gradient"></div>
                <div className="title-wrapper center">
                  <h2 className="title title--primary">
                    Продукты не найдены
                    <br />
                    Используйте меньше фильтров или{" "}
                    <a className="underlined-link link" href="/collections/all">
                      удалите все
                    </a>
                  </h2>
                </div>
              </div>
            </div>
             ):(
            <div className="collection page-width">
              <div className="loading-overlay gradient"></div>
              <ul
                id="product-grid"
                data-id="template--22795098620240__product-grid"
                className="grid product-grid grid--2-col-tablet-down grid--4-col-desktop"
              >
                {data.map((product, index) => (
                  <li
                    key={product.id}
                    className="grid__item scroll-trigger animate--slide-in"
                    data-cascade=""
                    style={{ "--animation-order": index }}
                  >
                    <div className="card-wrapper product-card-wrapper underline-links-hover">
                      <div
                        className="card card--standard card--media "
                        style={{ "--ratio-percent": "100.0%" }}
                      >
                        <div
                          className="card__inner color-scheme-2 gradient ratio"
                          style={{ "--ratio-percent": "100.0%" }}
                        >
                          <div className="card__media">
                            <div className="media media--transparent media--hover-effect">
                              <img
                                src={product.img}
                                sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                                alt={product.name}
                                className="motion-reduce"
                                width="900"
                                height="900"
                              />
                            </div>
                          </div>
                          <div className="card__content">
                            <div className="card__information">
                              <h3 className="card__heading">
                                <a
                                  href={`/product/${product.slug}`}
                                  id="StandardCardNoMediaLink-template--22795098620240__product-grid-9302325363024"
                                  className="full-unstyled-link"
                                  aria-labelledby="StandardCardNoMediaLink-template--22795098620240__product-grid-9302325363024 NoMediaStandardBadge-template--22795098620240__product-grid-9302325363024"
                                >
                                  {product.name}
                                </a>
                              </h3>
                            </div>
                            <div className="card__badge bottom left"></div>
                          </div>
                        </div>
                        <div className="card__content">
                          <div className="card__information">
                            <h3
                              className="card__heading h5"
                              id="title-template--22795098620240__product-grid-9302325363024"
                            >
                              <a
                                href={`/product/${product.slug}`}
                                id="CardLink-template--22795098620240__product-grid-9302325363024"
                                className="full-unstyled-link"
                                aria-labelledby="CardLink-template--22795098620240__product-grid-9302325363024 Badge-template--22795098620240__product-grid-9302325363024"
                              >
                                {product.name}
                              </a>
                            </h3>
                            <div className="card-information">
                              <span className="caption-large light"></span>
                              <div className="price">
                                <div className="price__container">
                                  <div className="price__regular">
                                    <span className="visually-hidden visually-hidden--inline">
                                      Обычная цена
                                    </span>
                                    <span className="price-item price-item--regular">
                                      {formatPrice(product.price)}{" "}
                                      {product.currency}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card__badge bottom left"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {totalCount >= 41 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
