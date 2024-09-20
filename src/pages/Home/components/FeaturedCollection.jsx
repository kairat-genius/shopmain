import { React, useEffect, useState } from "react";
import './FeaturedCollection.css'

import '../../../css/component-card.css'
import '../../../css/component-slider.css'
import '../../../css/template-collection.css'
import '../../../css/quick-add.css'
import '../../../css/component-rating.css'
import '../../../css/component-volume-pricing.css'
import '../../../css/component-price.css'
import '../../../css/quick-order-list.css'
import '../../../css/quantity-popover.css'

import { getProductList } from '../../../api/Product/ProductList/getProductList';
import { postCat } from "../../../api/User/Cat/postAddCart";
import { formatPrice } from "../../../hooks/formatPrice";
import { accessToken } from "../../../Fetch/settings";
import { toast } from "react-toastify";

const FeaturedCollection = ({onAddToCart}) => {
    
    const [data, setData] = useState([]); 


    const filter = `sort_by=top_seller`

  
    useEffect(() => {
        getProductList(setData, filter); 
    }, []);

    const handleAddToCart = (product) => {
        if (!accessToken) {
            toast.error("Пожалуйста, авторизуйтесь, чтобы добавить товары в корзину.");
            return; 
        }
        postCat(product.id, product, onAddToCart);
    };

    return (
        <section id="shopify-section-template--22795098653008__featured_collection" className="shopify-section section">
            <div className="color-scheme-1 isolate gradient">
                <div className="collection section-template--22795098653008__featured_collection-padding ollection-list-wrapper page-width isolate no-mobile-link section-template--22795098653008__collection_list_zPfgF9-padding" id="collection-template--22795098653008__featured_collection" data-id="template--22795098653008__featured_collection">
                    <div className="collection__title title-wrapper title-wrapper--no-top-margin">
                        <h2 className="title inline-richtext h2 scroll-trigger animate--slide-in">
                            Популярные продукты
                        </h2>
                    </div>
                    <slider-component className="slider-mobile-gutter page-width page-width-desktop scroll-trigger animate--slide-in">
                        <ul id="Slider-template--22795098653008__featured_collection" data-id="template--22795098653008__featured_collection" className="grid product-grid contains-card contains-card--product contains-card--standard grid--4-col-desktop grid--2-col-tablet-down" role="list" aria-label="Ползунок">
                            {data.slice(0, 4).map((product) => (
                            <li key={product.id} id="Slide-template--22795098653008__featured_collection-1" className="grid__item scroll-trigger animate--slide-in" data-cascade="" style={{ "--animation-order": product.index }}>
                                <div className="card-wrapper product-card-wrapper underline-links-hover">
                                    <div className="card card--standard card--media card--shape" style={{ "--ratio-percent": "100.0%" }}>
                                        <div className="card__inner color-scheme-2 gradient ratio" style={{ "--ratio-percent": "100.0%" }}>
                                            <div className="card__media shape--chevronright color-scheme-2 gradient">
                                                <div className="media media--transparent media--hover-effect">
                                                    <img src={product.img} sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)" alt="Анархическая Сборка" className="motion-reduce" loading="lazy" width="900" height="900" />
                                                </div>
                                            </div>
                                            <div className="card__content">
                                                <div className="card__information">
                                                    <h3 className="card__heading">
                                                        <a href={`/product/${product.slug}`} id="StandardCardNoMediaLink-template--22795098653008__featured_collection-9302325363024" className="full-unstyled-link" aria-labelledby="StandardCardNoMediaLink-template--22795098653008__featured_collection-9302325363024 NoMediaStandardBadge-template--22795098653008__featured_collection-9302325363024">
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="card__badge bottom left"></div>
                                            </div>
                                        </div>
                                        <div className="card__content">
                                            <div className="card__information">
                                                <h3 className="card__heading h5" id="title-template--22795098653008__featured_collection-9302325363024">
                                                    <a href={`/product/${product.slug}`} id="CardLink-template--22795098653008__featured_collection-9302325363024" className="full-unstyled-link" aria-labelledby="CardLink-template--22795098653008__featured_collection-9302325363024 Badge-template--22795098653008__featured_collection-9302325363024">
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <div className="card-information">
                                                    <span className="caption-large light"></span>
                                                    <div className="price">
                                                        <div className="price__container">
                                                            <div className="price__regular">
                                                                <span className="visually-hidden visually-hidden--inline">Обычная цена</span>
                                                                <span className="price-item price-item--regular">
                                                                {formatPrice(product.price)} {product.currency}
                                                                </span>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="quick-add no-js-hidden">
                                                <product-form data-section-id="template--22795098653008__featured_collection">
                                                    <form method="post" id="quick-add-template--22795098653008__featured_collection9302325363024" acceptCharset="UTF-8" className="form" encType="multipart/form-data" noValidate="novalidate" data-type="add-to-cart-form">
                                                        <input type="hidden" name="form_type" defaultValue="product" />
                                                        <input type="hidden" name="utf8" defaultValue="✓" />
                                                        <input type="hidden" name="id" defaultValue="48819068010832" className="product-variant-id" />
                                                        <button
                                                        id={`quick-add-template--22795098653008__featured_collection-${product.id}-submit`}
                                                        type="button"
                                                        className="quick-add__submit button button--full-width button--secondary"
                                                        aria-haspopup="dialog"
                                                        aria-labelledby={`quick-add-template--22795098653008__featured_collection-${product.id}-submit`}
                                                        aria-live="polite"
                                                        onClick={() => handleAddToCart(product)}
                                                    >
                                                        <span>Добавить в корзину</span>
                                                    </button>
                                                        <input type="hidden" name="product-id" value={product.id} />
                                                        <input type="hidden" name="section-id" defaultValue="template--22795098653008__featured_collection" />
                                                    </form>
                                                  
                                                </product-form>
                                            </div>
                                            <div className="card__badge bottom left"></div>
                                       
                                        </div>
                                    </div>
                                </div>
                            </li>
                             ))}
                        </ul>
                    </slider-component>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;