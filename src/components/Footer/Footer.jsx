import React, { useState } from 'react';

import './Footer.css'
import './section-footer.css';
import '../../css/component-newsletter.css';
import '../../css/component-list-menu.css';
import '../../css/component-list-payment.css';
import '../../css/component-list-social.css';

const Footer = () => {
    const [newsletter, setNewsletter] = useState('');
    return (
        <div
            id="shopify-section-sections--22795099111760__footer"
            className="shopify-section shopify-section-group-footer-group"
        >
            <footer className="footer color-scheme-1 gradient section-sections--22795099111760__footer-padding">
                <div className="footer__content-top page-width">
                    <div
                        className="footer-block--newsletter scroll-trigger animate--slide-in"
                        data-cascade=""
                        style={{ "--animation-order": 0 }}
                    >
                        <div className="footer-block__newsletter">
                            <h2 className="footer-block__heading inline-richtext">
                                Подпишись, чтобы забрать товар бесплатно!
                            </h2>
                            <form
                                method="post"
                                action="/contact#ContactFooter"
                                id="ContactFooter"
                                acceptCharset="UTF-8"
                                className="footer__newsletter newsletter-form"
                            >
                                <input type="hidden" name="form_type" defaultValue="customer" />
                                <input type="hidden" name="utf8" defaultValue="✓" />
                                <input type="hidden" name="contact[tags]" defaultValue="newsletter" />
                                <div className="newsletter-form__field-wrapper">
                                    <div className="field">
                                        <input
                                            id="NewsletterForm--sections--22795099111760__footer"
                                            type="email"
                                            name="contact[email]"
                                            className="field__input"
                                            value={newsletter}
                                            aria-required="true"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            autoComplete="email"
                                            placeholder="Адрес электронной почты"
                                            required
                                            onChange={(e) => setNewsletter(e.target.value)}
                                        />
                                        <label
                                            className="field__label"
                                            htmlFor="NewsletterForm--sections--22795099111760__footer"
                                        >
                                            Адрес электронной почты
                                        </label>
                                        <button
                                            type="submit"
                                            className="newsletter-form__button field__button"
                                            name="commit"
                                            id="Subscribe"
                                            aria-label="Подписаться"
                                        >
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
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="footer__content-bottom scroll-trigger animate--slide-in"
                    data-cascade=""
                    style={{ "--animation-order": 0 }}
                >
                    <div className="footer__content-bottom-wrapper page-width">
                        <div className="footer__column footer__localization isolate"></div>
                        <div className="footer__column footer__column--info">
                            <div className="footer__payment">
                                <span className="visually-hidden">Способы оплаты</span>
                                <ul className="list list-payment" role="list">
                                    <li className="list-payment__item">
                                        <svg
                                            className="icon icon--full-color"
                                            viewBox="0 0 38 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="38"
                                            height="24"
                                            role="img"
                                            aria-labelledby="pi-paypal"
                                        >
                                            <title id="pi-paypal">PayPal</title>
                                            <path
                                                opacity=".07"
                                                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                                            />
                                            <path
                                                fill="#fff"
                                                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                                            />
                                            <path
                                                fill="#003087"
                                                d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                                            />
                                            <path
                                                fill="#3086C8"
                                                d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                                            />
                                            <path
                                                fill="#012169"
                                                d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__content-bottom-wrapper page-width footer__content-bottom-wrapper--center">
                        <div className="footer__copyright caption">
                            <small className="copyright__content">
                                © 2024, <a href="/" title="">Craftopia</a>
                            </small>
                   
                            <ul className="policies list-unstyled"></ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
