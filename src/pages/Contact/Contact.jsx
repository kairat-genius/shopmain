import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import './Contact.css'
import './../../css/section-rich-text.css'
import './../../css/section-main-page.css'

const Contact = () => {

    return (
        <>
            <Header />
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
                <section id="shopify-section-template--22795098718544__main" className="shopify-section section">

                    <div className="page-width page-width--narrow section-template--22795098718544__main-padding">
                        <h1 className="main-page-title page-title h0 scroll-trigger animate--fade-in">
                            Контакты
                        </h1>
                        <div className="rte scroll-trigger animate--slide-in">

                        </div>
                    </div>


                </section>
                <section id="shopify-section-template--22795098718544__rich_text_zt4q8F" className="shopify-section section">

                    <div className="isolate">
                        <div className="rich-text content-container color-scheme-1 gradient rich-text--full-width content-container--full-width section-template--22795098718544__rich_text_zt4q8F-padding">
                            <div className="rich-text__wrapper rich-text__wrapper--center page-width">
                                <div className="rich-text__blocks center">
                                    <h2 className="rich-text__heading rte inline-richtext h1 scroll-trigger animate--slide-in" data-cascade="" style={{"--animation-order": "1"}}>
                                    Связь с  художником на прямую
                                </h2>
                                    <div className="rich-text__text rte scroll-trigger animate--slide-in" data-cascade="" style={{"--animation-order": "2"}}>
                                        <p>Мы хотим оповестить Вас, что всеми сборками и брендом занимается лично Художник. Перед обращением к нему, убедитесь, что вопрос действительно важен для Вас.</p>
                                    </div>
                                    <div className="rich-text__buttons scroll-trigger animate--slide-in" data-cascade="" style={{"--animation-order": "3"}}>
                                        <a href="https://vk.com/tahom34" className="button button--secondary">Связаться</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
       
            <Footer />
        </>
    );
};

export default Contact;