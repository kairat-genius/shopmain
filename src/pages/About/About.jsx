import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Support from "../../components/Support/Support.jsx";
import { getFQA } from "../../api/Static/getFQA.jsx";
import "./About.css";
import "./../../css/component-slider.css";
import "./../../css/section-multicolumn.css";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFQA(setData);
  }, []);
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
          id="shopify-section-template--22902886596944__multicolumn_fnrpAX"
          className="shopify-section section"
        >
          <div className="multicolumn color-scheme-1 gradient background-primary">
            <div
              className="page-width section-template--22902886596944__multicolumn_fnrpAX-padding isolate scroll-trigger animate--slide-in"
              data-cascade=""
            >
              <div className="title-wrapper-with-link title-wrapper--self-padded-mobile title-wrapper--no-top-margin multicolumn__title">
                <h2 className="title inline-richtext h0">FAQ</h2>
              </div>
              <slider-component className="slider-mobile-gutter">
                <ul
                  className="multicolumn-list contains-content-container grid grid--1-col-tablet-down grid--3-col-desktop"
                  id="Slider-template--22902886596944__multicolumn_fnrpAX"
                  role="list"
                >
                  {data.map((fqa, index) => (
                    <li
                      id="Slide-template--22902886596944__multicolumn_fnrpAX-1"
                      className="multicolumn-list__item grid__item scroll-trigger animate--slide-in"
                      data-cascade=""
                      style={{ "--animation-order": index }}
                      key={index}
                    >
                      <div className="multicolumn-card content-container">
                        <div className="multicolumn-card__info">
                          <h3 className="inline-richtext">
                            {fqa.question}
                          </h3>
                          <div className="rte">
                            <p>
                              {fqa.answer}
                            </p>
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
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default About;
