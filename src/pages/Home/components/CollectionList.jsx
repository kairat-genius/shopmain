import { React, useEffect, useState } from "react";
import "./CollectionList.css";
import { getPopularService } from "../../../api/Static/getPopularService";
import "../../../css/section-collection-list.css";
import "../../../css/component-card.css";
import "../../../css/component-slider.css";

const CollectionList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPopularService(setData);
  }, []);

  return (
    <section
      id="shopify-section-template--22795098653008__collection_list_zPfgF9"
      className="shopify-section section section-collection-list"
    >
      <div className="color-scheme-1 gradient">
        <div className="collection-list-wrapper page-width isolate no-mobile-link section-template--22795098653008__collection_list_zPfgF9-padding">
          <div className="title-wrapper-with-link title-wrapper--self-padded-mobile title-wrapper--no-top-margin">
            <h2
              id="SectionHeading-template--22795098653008__collection_list_zPfgF9"
              className="collection-list-title inline-richtext h2 scroll-trigger animate--slide-in"
            >
              Популярные услуги
            </h2>
          </div>
          <slider-component className="slider-mobile-gutter scroll-trigger animate--slide-in">
            <ul
              className="collection-list contains-card contains-card--collection contains-card--standard grid grid--3-col-desktop grid--1-col-tablet-down collection-list--3-items"
              id="Slider-template--22795098653008__collection_list_zPfgF9"
              role="list"
            >
              {data.map((service) => (
                <li
                  id="Slide-template--22795098653008__collection_list_zPfgF9-1"
                  className="collection-list__item grid__item scroll-trigger animate--slide-in"
                  data-cascade=""
                  style={{ "--animation-order": service.index }}
                  key={service.index}
                >
                  <div className="card-wrapper animate-arrow collection-card-wrapper">
                    <div
                      className="card card--standard card--media"
                      style={{ "--ratio-percent": "100%" }}
                    >
                      <div
                        className="card__inner color-scheme-2 gradient ratio"
                        style={{ "--ratio-percent": "100%" }}
                      >
                        <div className="card__media">
                          <div className="media media--transparent media--hover-effect">
                            <img
                              src={service.img}
                              sizes="(min-width: 1200px) 366px, (min-width: 750px) calc((100vw - 10rem) / 2), calc(100vw - 3rem)"
                              alt={service.title}
                              height="900"
                              width="900"
                              loading="lazy"
                              className="motion-reduce"
                            />
                          </div>
                        </div>
                        <div className="card__content">
                          <div className="card__information">
                            <h3 className="card__heading">
                              <a
                                href={`/collections/all/?category=${service.title}`}
                                className="full-unstyled-link"
                              >
                                {service.title}
                                <span className="icon-wrap">
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
                                </span>
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="card__content">
                        <div className="card__information">
                          <h3 className="card__heading">
                            <a
                              href={`/collections/all/?category=${service.title}`}
                              className="full-unstyled-link"
                            >
                              {service.title}
                              <span className="icon-wrap">
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
                              </span>
                            </a>
                          </h3>
                        </div>
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

export default CollectionList;
