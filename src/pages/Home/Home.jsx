import React, { useState } from "react";
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ImageBanner from './components/ImageBanner.jsx';
import FeaturedCollection from './components/FeaturedCollection.jsx';
import CollectionList from './components/CollectionList.jsx';
import RichText from './components/RichText.jsx';

const Home = () => {


    const [notificationItem, setNotificationItem] = useState(null);

    const handleAddToCart = (product) => {
        setNotificationItem(product);
    };


    return (
        <>
            <Header notificationItem={notificationItem} setNotificationItem={setNotificationItem}/>
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1"> 
                <ImageBanner/>
                <FeaturedCollection onAddToCart={handleAddToCart}/>
                <CollectionList/>
                <RichText/>
            </main>
            <Footer />

        </>
    );
};

export default Home;