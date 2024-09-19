import React from 'react';
import './ImageBanner.css'
import banner from '../../../assets/Home/minecraft-free.webp'

import '../../../css/section-image-banner.css'

const ImageBanner = () => {

    return (
        <section id="shopify-section-template--22795098653008__image_banner" className="shopify-section section">
            <div id="Banner-template--22795098653008__image_banner" className="banner banner--content-align-center banner--content-align-mobile-center banner--adapt banner--adapt banner--desktop-transparent scroll-trigger animate--fade-in">
                <div className="banner__media media animate--ambient scroll-trigger animate--fade-in">
                    <img src={banner} alt="" width="1600" height="675.0" sizes="120vw" fetchpriority="high" />
                </div><div className="banner__content banner__content--middle-center page-width scroll-trigger animate--slide-in">
                    <div className="banner__box content-container content-container--full-width-mobile color-scheme-4 gradient">
                        <h2 className="banner__heading inline-richtext h0">
                            Просмотрите наши продукты
                        </h2><div className="banner__buttons">
                            <a href="/collections/all" className="button button--secondary">Перейти</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageBanner;