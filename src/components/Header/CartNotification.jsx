import React, { useState, useEffect } from "react";

const CartNotification = ({ cartItems, onClose, count}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsVisible(true);
    }
  }, [cartItems]);

  const handleClose = () => {
    setIsVisible(false);
    onClose()
  };

  useEffect(() => {
    // Показать уведомление при добавлении товара
    if (isVisible) {
      // Уведомление будет отображаться 3 секунды, затем автоматически скрывается
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);




  return (
    
    <cart-notification>
      <div class="cart-notification-wrapper page-width">
        <div
          id="cart-notification"
          className={`cart-notification focus-inset color-scheme-1 gradient ${isVisible ? 'animate active' : ''}`}
          aria-modal="true"
          aria-label="Товар добавлен в корзину."
          role="dialog"
          tabIndex="-1"
        >
          <div class="cart-notification__header">
            <h2 class="cart-notification__heading caption-large text-body">
              <svg
                class="icon icon-checkmark"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 9"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z"
                  fill="currentColor"
                ></path>
              </svg>
              Товар добавлен в корзину.
            </h2>
            <button
              type="button"
              class="cart-notification__close modal__close-button link link--text focus-inset"
              aria-label="Закрыть"
              onClick={handleClose}
            >
              <svg class="icon icon-close" aria-hidden="true" focusable="false">
                <use href="#icon-close"></use>
              </svg>
            </button>
          </div>
          {cartItems.map((item, index) => (
            <div
              id="cart-notification-product"
              class="cart-notification-product"
              key={index}
            >
              <div class="cart-notification-product__image global-media-settings">
                <img
                  src={item.img}
                  alt={item.name}
                  width="70"
                  height="70"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 class="cart-notification-product__name h4">{item.name}</h3>
                <dl></dl>
              </div>
            </div>
          ))}
          <div class="cart-notification__links">
            <a
              href="/cart"
              id="cart-notification-button"
              class="button button--secondary button--full-width"
            >
              Просмотреть корзину ({count})
            </a>
       
              <a
                class="button button--primary button--full-width"
                name="checkout"
                href="/checkout"

              >
                Оформить заказ
              </a>
         
            <a href="/collections/all" type="button" class="link button-label">
              Продолжить покупки
            </a>
          </div>
        </div>
      </div>
    </cart-notification>
  );
};

export default CartNotification;
