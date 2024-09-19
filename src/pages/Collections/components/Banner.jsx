import React from 'react';
import { useLocation } from 'react-router-dom';

import './../../../css/component-collection-hero.css';
import './Banner.css';

const Banner = () => {
  const location = useLocation();

  const getCategoryFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('category');
  };

  const category = getCategoryFromQuery();

    return (
        <div id="shopify-section-template--22795098620240__banner" className="shopify-section section">
            <div className="collection-hero color-scheme-1 gradient">
                <div className="collection-hero__inner page-width  scroll-trigger animate--fade-in">
                    <div className="collection-hero__text-wrapper">
                        <h1 className="collection-hero__title">
                            <span className="visually-hidden">Коллекция: </span>{category ? decodeURIComponent(category) : 'Продукты'}</h1>
                        <div className="collection-hero__description rte">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;