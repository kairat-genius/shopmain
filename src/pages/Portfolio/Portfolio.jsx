import {React, useEffect, useState} from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Support from '../../components/Support/Support.jsx';

import { getPartners } from '../../api/Static/getPartners.jsx'

import './Portfolio.css'
import './../../css/component-slider.css'
import './../../css/section-multicolumn.css'


const Portfolio = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getPartners(setData);  
    }, []);
    
    return (
        <>
            <Header />
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
                <section id="shopify-section-template--22902994600272__multicolumn_CNLPNY" className="shopify-section section">
                    <div className="multicolumn color-scheme-1 gradient background-none">
                        <div className="page-width section-template--22902994600272__multicolumn_CNLPNY-padding isolate scroll-trigger animate--slide-in" data-cascade="">
                            <div className="title-wrapper-with-link title-wrapper--self-padded-mobile title-wrapper--no-top-margin multicolumn__title">
                                <h2 className="title inline-richtext h2">
                                    Наши основные партнёры
                                </h2>
                            </div>
                            <slider-component className="slider-mobile-gutter">
                                <ul className="multicolumn-list contains-content-container grid grid--2-col-tablet-down grid--3-col-desktop" id="Slider-template--22902994600272__multicolumn_CNLPNY" role="list">
                                {data.map((partner, index) => (
                                    <li key={index} id="Slide-template--22902994600272__multicolumn_CNLPNY-1" className="multicolumn-list__item grid__item center scroll-trigger animate--slide-in" data-cascade="" style={{ "--animation-order": index }}>
                                        <div className="multicolumn-card content-container">
                                            <div className="multicolumn-card__image-wrapper multicolumn-card__image-wrapper--full-width multicolumn-card-spacing">
                                                <div className="media media--transparent media--circle">
                                                    <img src={partner.img} alt="" width="3200" height="3200" sizes="(min-width: 1200px) calc((1200px - 116px) * 1 /  3),(min-width: 990px) calc((100vw - 116px) * 1 / 3), (min-width: 750px) calc((100vw - 108px) * 1 / 2)," className="multicolumn-card__image" />
                                                </div>
                                            </div>
                                            <div className="multicolumn-card__info">
                                                <h3 className="inline-richtext">
                                                    <strong>{partner.name}</strong>
                                                </h3>
                                                <div className="rte">
                                                    <h4>{partner.description}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>  
                                ))}                                          
                                </ul>
                            </slider-component>
                            <div className="center"></div>
                        </div>
                    </div>
                </section>
                <Support/>
            </main>
            <Footer />

        </>
    );
};

export default Portfolio;