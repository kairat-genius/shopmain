import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { formatPrice } from '../../hooks/formatPrice.js';

import "./Search.css";
import "./../../css/template-collection.css";
import "./../../css/component-card.css";
import "./../../css/component-price.css";
import "./../../css/component-search.css";
import "./../../css/component-facets.css";
import "./../../css/component-rating.css";
import "./../../css/component-volume-pricing.css";
import "./../../css/component-price.css";
import "./../../css/quick-order-list.css";
import "./../../css/quantity-popover.css";
import "./../../css/component-show-more.css";
import "./../../css/component-swatch-input.css";
import "./../../css/component-swatch.css";
import SearchPredictive from "./SearchPredictive.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import { getProductList } from "../../api/Product/ProductList/getProductList.jsx";

const Search = () => {
  const [query, setQuery] = useState("");
  const [productData, setProductData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('search') || ""; 
  const initialPage = parseInt(queryParams.get('page')) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    setQuery(initialQuery);  
  }, [initialQuery]);


  useEffect(() => {
    setQuery(initialQuery);  
  }, [initialQuery]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      queryParams.set('page', page);
      navigate(`?${queryParams.toString()}`);
    }
  };

  useEffect(() => {
    const filter = queryParams.toString(); 
    getProductList(setData, filter, setTotalPages, setTotalCount, setMaxPrice);
  }, [location.search, currentPage]);


  return (
    <>
      <Header />
      <main
        id="MainContent"
        className="content-for-layout focus-none"
        role="main"
        tabIndex="-1"
      >
        <section
          id="shopify-section-template--22795098849616__main"
          className="shopify-section section"
        >
          <div className="template-search section-template--22795098849616__main-padding">
            <div className="template-search__header page-width scroll-trigger animate--fade-in">
              <h1 className="h2 center">Результаты поиска</h1>
              <div className="template-search__search">
                <SearchPredictive
                  productData={productData}
                  setProductData={setProductData}
                  recommendations={recommendations}
                  setRecommendations={setRecommendations}
                  filteredRecommendations={filteredRecommendations}
                  setFilteredRecommendations={setFilteredRecommendations}
                />
              </div>
            </div>

            {totalCount === 0 ? (
              <div className="template-search__search">
              <p role="status">По запросу «{initialQuery}» ничего не найдено. Проверьте правописание или выберите другие слова либо фразу.</p>
              <a className="underlined-link link" href="/search">
                      удалите все
                    </a>
              </div>
            ) : (
              <div>
                <Filter totalCount={totalCount} maxPrice={maxPrice} />
                <div className="product-grid-container" id="ProductGridContainer">
                  <div
                    className="template-search__results collection page-width"
                    id="product-grid"
                    data-id="template--22795098849616__main"
                  >
                    <div className="loading-overlay gradient"></div>
                    <ul
                      className="grid product-grid  grid--2-col-tablet-down grid--4-col-desktop"
                      role="list"
                    >
                      {data.map((sear) => (
                        <li
                          className="grid__item scroll-trigger animate--slide-in"
                          data-cascade=""
                          key={sear.id}
                        >
                          <div className="card-wrapper product-card-wrapper underline-links-hover">
                            <div
                              className="card card--standard card--media"
                              style={{ "--ratio-percent": "100.0%" }}
                            >
                              <div
                                className="card__inner color-scheme-2 gradient ratio"
                                style={{ "--ratio-percent": "100.0%" }}
                              >
                                <div className="card__media">
                                  <div className="media media--transparent media--hover-effect">
                                    <img
                                      src={sear.img}
                                      sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                                      alt={sear.name}
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
                                        href={`/product${sear.slug}`}
                                        id={`StandardCardNoMediaLink--${sear.id}`}
                                        className="full-unstyled-link"
                                        aria-labelledby={`StandardCardNoMediaLink--${sear.id} NoMediaStandardBadge--${sear.id}`}
                                      >
                                        {sear.name}
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
                                    id={`title--${sear.id}`}
                                  >
                                    <a
                                      href={`/product${sear.slug}`}
                                      id={`CardLink--${sear.id}`}
                                      className="full-unstyled-link"
                                      aria-labelledby={`CardLink--${sear.id} Badge--${sear.id}`}
                                    >
                                      {sear.name}
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
                                          {formatPrice(sear.price)} {sear.currency.name}
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
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Search;
