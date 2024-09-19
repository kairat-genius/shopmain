import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import ProductRecommendations from "./components/ProductRecommendations.jsx";
import ProductModal from "./components/ProductModal.jsx";
import { getProductDetail } from "../../api/Product/ProductDetail/getProductDetail.jsx";

import NotFound404 from "../NotFound404/NotFound404.jsx"
import "./ProductDetail.css";

const ProductDetail = () => {

  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      getProductDetail(setData, slug, setError); 
    }
  }, [slug]); 

  if (error) {
    if (error.response && error.response.status === 404) {
      return <NotFound404 />;
    }
    return <div>Error: {error.message}</div>;
  }


  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  
  return (
    <>
      <Header />
      <main
        id="MainContent"
        className="content-for-layout focus-none"
        role="main"
        tabIndex="-1"
      >
        
        <ProductInfo onClick={handleToggleModal} data={data} />
        <ProductRecommendations dataSimilar={data}/>
        

         <ProductModal onClose={handleModalClose} isOpen={isModalOpen} data={data}/>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
