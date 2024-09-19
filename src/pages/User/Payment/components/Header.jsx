import React from "react";
import logo from "../../../../../public/logo1.png";
const Header = () => {
  return (
    <header
      role="banner"
      className="EAjaz _8wrz5 d5pfT _1fragemxc _1fragemr6 _1fragemr2"
    >
      <div className="i8Dpn">
        <div>
          <div>
            <div className="_1ip0g651 _1ip0g650 _1fragempf _1fragem4l _1fragem6y _1fragem3c">
              <header
                className="_1mrl40q0 _1fragempf _1fragem55 _1fragem7i _1fragemq4 _1fragemq8 _1fragem3c _1fragempz _16s97g7f _16s97g7p _16s97g71j _16s97g71t    _16s97g7ap"
                style={{"--_16s97g7a": "1fr", "--_16s97g7k": "minmax(0, 1fr)", "--_16s97g71e": "minmax(0, 1fr) minmax(auto, max-content)", "--_16s97g71o": "minmax(0, 1fr)"}}
              >
                <span>
                  <a
                    href="/"
                    className="s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi3 s2kwpi7 s2kwpi5 _1fragemwl"
                  >
                    <span className="pJt3c">
                      <span className="n8k95w1 n8k95w0 _1fragempf n8k95w2">
                      <img
                      src={logo}
                      alt="_xyd0jnik"
                      width="200"
                      height="50"
                      loading="eager"
                      className="header__heading-logo motion-reduce"
                      sizes="(max-width: 200px) 100vw, 100px"
                    />
                      </span>
                    </span>
                  </a>
                </span>
                <span>
                  <a
                    id="cart-link"
                    aria-label="Корзина"
                    href="/cart"
                    className="s2kwpi1 s2kwpi0 _1fragempf _1fragemwu _1fragemx3 _1fragemwp s2kwpi2 s2kwpi6 s2kwpi4 _1fragemwm"
                  >
                    <span className="a8x1wu2 a8x1wu1 _1fragemsd _1fragem2d _1fragemog _1fragemo6 a8x1wug a8x1wuj a8x1wuh _1fragem2i a8x1wup a8x1wul a8x1wuy">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        focusable="false"
                        aria-hidden="true"
                        className="a8x1wu10 a8x1wuz _1fragem2i _1fragemsd _1fragemog _1fragemo6 _1fragemri"
                      >
                        <path d="M2.675 10.037 3.072 4.2h7.856l.397 5.837A2.4 2.4 0 0 1 8.932 12.6H5.069a2.4 2.4 0 0 1-2.394-2.563"></path>
                        <path d="M4.9 3.5a2.1 2.1 0 1 1 4.2 0v1.4a2.1 2.1 0 0 1-4.2 0z"></path>
                      </svg>
                    </span>
                  </a>
                </span>
              </header>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
