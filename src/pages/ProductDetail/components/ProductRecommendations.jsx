import React, { useState, useEffect } from "react";

import "./ProductInfo.css";
import "./../../../css/component-card.css";
import "./../../../css/component-price.css";
import "./../../../css/section-related-products.css";
import "./../../../css/component-rating.css";
import "./../../../css/component-volume-pricing.css";
import "./../../../css/quick-order-list.css";
import "./../../../css/quantity-popover.css";
import { formatPrice } from "../../../hooks/formatPrice";
import { postProductSimilar } from "../../../api/Product/ProductDetail/postProductSimilar";

const ProductInfo = ({dataSimilar}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataSimilar && dataSimilar.category && dataSimilar.id) {
      postProductSimilar(setData, dataSimilar.category, dataSimilar.id);
    }
  }, [dataSimilar]);

  return (
    <section
      id="shopify-section-template--22795098816848__related-products"
      className="shopify-section section"
    >
      <div className="color-scheme-1 gradient">
        <product-recommendations
          data-section-id="template--22795098816848__related-products"
          data-product-id="9302321234256"
        >
          <div className="related-products page-width section-template--22795098816848__related-products-padding isolate scroll-trigger animate--slide-in product-recommendations--loaded">
          <h2 className="related-products__heading inline-richtext h2">
            You may also like
          </h2>
          <ul
            className="grid product-grid grid--4-col-desktop grid--2-col-tablet-down"
            role="list"
          >
            {data.map((similar) => (
            <li className="grid__item" key={similar.id}>
              <div className="card-wrapper product-card-wrapper underline-links-hover">
                <div
                  className="card card--standardcard--media"
                  style={{"--ratio-percent": "100%"}}
                >
                  <div
                    className="card__inner color-scheme-2 gradient ratio"
                    style={{"--ratio-percent": "100%"}}
                  >
                    <div className="card__media">
                      <div className="media media--transparent media--hover-effect">
                        <img
                          src={similar.img}
                          sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                          alt={similar.name}
                          className="motion-reduce"
                          loading="lazy"
                          width="900"
                          height="900"
                        />
                      </div>
                    </div>
                    <div className="card__content">
                      <div className="card__information">
                        <h3 className="card__heading">
                          <a
                            href={`/product/${similar.slug}`}
                            id="StandardCardNoMediaLink--9302325363024"
                            className="full-unstyled-link"
                            aria-labelledby="StandardCardNoMediaLink--9302325363024 NoMediaStandardBadge--9302325363024"
                          >
                            {similar.name}
                          </a>
                        </h3>
                      </div>
                      <div className="card__badge bottom left"></div>
                    </div>
                  </div>
                  <div className="card__content">
                    <div className="card__information">
                      <h3 className="card__heading h5" id="title--9302325363024">
                        <a
                          href={`/product/${similar.slug}`}
                          id="CardLink--9302325363024"
                          className="full-unstyled-link"
                          aria-labelledby="CardLink--9302325363024 Badge--9302325363024"
                        >
                          {similar.name}
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
                              {formatPrice(similar.price)} {similar.currency}
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
          </div>
        </product-recommendations>
      </div>
    </section>
  );
};

export default ProductInfo;
