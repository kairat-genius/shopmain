import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SortByFilter = () => {
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
    <div className="facet-filters sorting caption">
      <div className="facet-filters__field">
        <h2 className="facet-filters__label caption-large text-body">
          <label htmlFor="SortBy">Сортировка:</label>
        </h2>
        <div className="select">
          <select
            name="sort_by"
            className="facet-filters__sort select__select caption-large"
            id="SortBy"
            aria-describedby="a11y-refresh-page-message"
            value={selectedSort}
            onChange={handleChange}
          >
            <option value="">Рекомендуется</option>
            <option value="top_seller">Лидер продаж</option>
            <option value="a_to_z">От А до Я</option>
            <option value="z_to_a">От Я до А</option>
            <option value="price_asc">По возрастанию цены</option>
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
  );
};

export default SortByFilter;
