import React, { useState, useEffect } from "react";
import "../../css/component-predictive-search.css";
import { getProductList } from "../../api/Product/ProductList/getProductList";
import { getPopularService } from "../../api/Static/getPopularService";

const PredictiveSearch = () => {
  const [query, setQuery] = useState("");
  const [productData, setProductData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);

  useEffect(() => {
    // Загружаем рекомендации с сервера при первой загрузке компонента
    getPopularService(setRecommendations);
  }, []);

  useEffect(() => {
    if (query) {
      // Фильтруем продукты
      filterProducts(query);

      // Фильтруем рекомендации по введенному запросу
      const filteredStatic = recommendations.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRecommendations(filteredStatic);
    } else {
      // Сбрасываем результаты, если поле поиска пустое
      setProductData([]);
      setFilteredRecommendations([]);
    }
  }, [query, recommendations]);

  const filterProducts = (query) => {
    const filter = `search=${query}`;
    getProductList(setProductData, filter);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Перенаправляем на страницу поиска с параметром запроса
    window.location.href = `/search?search=${encodeURIComponent(query)}`;
  };
  return (
    <div
      data-loading-text="Загрузка…"
      results={query.length ? "true" : undefined}
      open={query.length ? true : undefined}
      className="search-modal__form"
      id="predictive-search"
    >
      <main-search>
        <form
          onSubmit={handleSubmit}
          method="get"
          role="search"
          className="search search-modal__form"
        >
          <div className="field">
            <input
              className="search__input field__input"
              id="Search-In-Template"
              type="search"
              value={query}
              placeholder="Поиск"
              role="combobox"
              aria-expanded={query.length ? "true" : undefined}
              aria-owns="predictive-search-results"
              aria-controls="predictive-search-results"
              aria-haspopup="listbox"
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-activedescendant=""
              onChange={handleInputChange}
            />
            <label className="field__label" htmlFor="Search-In-Template">
              Поиск
            </label>
            <input name="options[prefix]" type="hidden" defaultValue="last" />

            <div className="predictive-search predictive-search--search-template" style={query.length ? { maxHeight: "805px" } : undefined}>
              <div id="predictive-search-results" role="listbox">
                {/* Статические рекомендации */}
                {filteredRecommendations.length > 0 && (
                  <div className="predictive-search__result-group">
                    <h2 className="predictive-search__heading text-body caption-with-letter-spacing">Рекомендации</h2>
                    <ul className="predictive-search__results-list list-unstyled">
                      {filteredRecommendations.map((item) => (
                        <li key={item.id} className="predictive-search__list-item">
                          <a href={`/collections/all/?category=${item.title}`} className="predictive-search__item link link--text">
                            <img className="predictive-search__image" src={item.img} alt={item.title} width="50" height="50" />
                            <div className="predictive-search__item-content predictive-search__item-content--centered" style={{paddingLeft: "20px"}}>
                              <p className="predictive-search__item-heading h5">{item.title}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Результаты поиска продуктов */}
                {productData.length > 0 && (
                  <div className="predictive-search__result-group">
                    <h2 id="predictive-search-products" className="predictive-search__heading text-body caption-with-letter-spacing">Товары</h2>
                    <ul className="predictive-search__results-list list-unstyled" role="group" aria-labelledby="predictive-search-products">
                      {productData.slice(0, 6).map((product) => (
                        <li key={product.id} className="predictive-search__list-item" role="option" aria-selected="false">
                          <a href={`/product/${product.slug}`} className="predictive-search__item link link--text">
                            <img className="predictive-search__image" src={product.img} alt={product.name} width="50" height="50" />
                            <div className="predictive-search__item-content predictive-search__item-content--centered" style={{paddingLeft: "20px"}}>
                              <p className="predictive-search__item-heading h5">{product.name}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="predictive-search__loading-state">
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

                <div id="predictive-search-option-search-keywords" className="predictive-search__search-for-button">
                  <button
                    className="predictive-search__item predictive-search__item--term link link--text h5 animate-arrow"
                    tabIndex="-1"
                    role="option"
                    aria-selected="false"
                  >
                    <span data-predictive-search-search-for-text="">
                      Поиск "{query}"
                    </span>
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
                  </button>
                </div>
              </div>
            </div>

            <span
              className="predictive-search-status visually-hidden"
              role="status"
              aria-hidden={query.length ? "true" : undefined}
            >
              Результаты: 1: Продукты: 1
            </span>
            <button
              type="reset"
              className={`reset__button field__button ${query.length === 0 ? "hidden" : ""}`}
              aria-label="Удалить поисковый запрос"
              onClick={() => setQuery("")}
            >
              <svg
                className="icon icon-close"
                aria-hidden="true"
                focusable="false"
              >
                <use href="#icon-reset"></use>
              </svg>
            </button>
            <button
              type="submit"
              className="search__button field__button"
              aria-label="Поиск"
            >
              <svg
                className="icon icon-search"
                aria-hidden="true"
                focusable="false"
              >
                <use href="#icon-search"></use>
              </svg>
            </button>
          </div>
        </form>
      </main-search>
    </div>
  );
};

export default PredictiveSearch;

