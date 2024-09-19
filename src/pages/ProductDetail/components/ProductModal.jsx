import React, { useRef } from "react";

const ProductModal = ({ onClose, isOpen, data }) => {
  return (
    <product-modal>
      <div
        id="ProductModal-template--22795098816848__main"
        className="product-media-modal media-modal"
        {...(isOpen ? { open: true } : {})}
      >
        <div
          className="product-media-modal__dialog color-scheme-1 gradient"
          role="dialog"
          aria-label="Галерея мультимедиа"
          aria-modal="true"
          tabIndex="-1"
        >
          <button
            id="ModalClose-template--22795098816848__main"
            type="button"
            className="product-media-modal__toggle"
            aria-label="Закрыть"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className="icon icon-close"
              fill="none"
              viewBox="0 0 18 17"
            >
              <path
                d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <div
            className="product-media-modal__content color-scheme-1 gradient"
            role="document"
            aria-label="Галерея мультимедиа"
            tabIndex="0"
          >
            <img
              className="global-media-settings global-media-settings--no-shadow active"
              sizes="(min-width: 750px) calc(100vw - 22rem), 1100px"
              src={data.img}
              alt={data.name}
              loading="lazy"
              width="1100"
              height="1100"
              data-media-id="47349064958288"
            />
          </div>
        </div>
      </div>
    </product-modal>
  );
};

export default ProductModal;
