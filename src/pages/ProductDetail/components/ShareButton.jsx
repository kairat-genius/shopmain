import React from "react";

const ShareButton = ({data}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data.name,
          text: data.description,
          url: window.location.href, 
        });
        console.log("Контент успешно отправлен");
      } catch (error) {
        console.error("Ошибка при отправке контента: ", error);
      }
    } else {
      console.log('API "Поделиться" не поддерживается вашим браузером');
      const shareUrlInput = document.getElementById('ShareUrl-template--22795098816848__main');
      shareUrlInput.select();
      document.execCommand('copy');
      alert('Ссылка скопирована в буфер обмена');
    }
  };

  return (
    <div id="Share-template--22795098816848__main" className="share-button quick-add-hidden">
      <button className="share-button__button" onClick={handleShare}>
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          className="icon icon-share"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M1.625 8.125V10.2917C1.625 10.579 1.73914 10.8545 1.9423 11.0577C2.14547 11.2609 2.42102 11.375 2.70833 11.375H10.2917C10.579 11.375 10.8545 11.2609 11.0577 11.0577C11.2609 10.8545 11.375 10.579 11.375 10.2917V8.125"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.14775 1.27137C6.34301 1.0761 6.65959 1.0761 6.85485 1.27137L9.56319 3.9797C9.75845 4.17496 9.75845 4.49154 9.56319 4.6868C9.36793 4.88207 9.05135 4.88207 8.85609 4.6868L6.5013 2.33203 4.14652 4.6868C3.95126 4.88207 3.63468 4.88207 3.43942 4.6868C3.24415 4.49154 3.24415 4.17496 3.43942 3.9797L6.14775 1.27137Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 1.125C6.77614 1.125 7 1.34886 7 1.625V8.125C7 8.40114 6.77614 8.625 6.5 8.625C6.22386 8.625 6 8.40114 6 8.125V1.625C6 1.34886 6.22386 1.125 6.5 1.125Z"
            fill="currentColor"
          ></path>
        </svg>
        Share
      </button>
    </div>
  );
};

export default ShareButton;
