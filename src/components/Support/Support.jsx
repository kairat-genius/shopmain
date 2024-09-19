import { React, useEffect, useState } from "react";
import './Support.css';

import '../../css/section-rich-text.css'

import { getContact } from '../../api/Static/getContact';

const Support = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    getContact(setData);
  }, []);

    return (
        <section id="shopify-section-template--22902994600272__rich_text_EGytXU" className="shopify-section section">
            <div className="isolate">
                <div className="rich-text content-container color-scheme-1 gradient rich-text--full-width content-container--full-width section-template--22902994600272__rich_text_EGytXU-padding">
                    <div className="rich-text__wrapper rich-text__wrapper--center page-width">
                        <div className="rich-text__blocks center">
                            <h2 className="rich-text__heading rte inline-richtext h2 scroll-trigger animate--slide-in" data-cascade="" style={{ "--animation-order": "0" }}>
                                Хотите  задать вопрос?
                            </h2>
                            <div className="rich-text__text rte scroll-trigger animate--slide-in" data-cascade="" style={{ "--animation-order": "0" }}>
                                <p>Наш менеджер ответит  Вам на любой интересующий Вас вопрос и проконсультирует в разработке вашего будущего проекта. Напишите нам! 😍</p>
                            </div>
                            
                            <div className="rich-text__buttons rich-text__buttons--multiple scroll-trigger animate--slide-in" data-cascade="" style={{ "--animation-order": "0" }}>
                                <a href={data.telegram} role="link" className="button button--secondary">Telegram</a>
                                <a href={data.vk} role="link" className="button button--secondary">Вконтакте</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

    )

}

export default Support;