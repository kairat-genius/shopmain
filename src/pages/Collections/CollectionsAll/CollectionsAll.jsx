import Header from '../../../components/Header/Header.jsx';
import Footer from '../../../components/Footer/Footer.jsx';
import Banner from '../components/Banner.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getProductList } from '../../../api/Product/ProductList/getProductList.jsx';

const CollectionsAll = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const initialPage = parseInt(queryParams.get('page')) || 1;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(0);
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            queryParams.set('page', page);
            navigate(`?${queryParams.toString()}`);
        }
    };

    useEffect(() => {
        const filter = queryParams.toString(); 
        getProductList(setData, filter, setTotalPages, setTotalCount, setMaxPrice);
    }, [location.search, currentPage]); 
    return (
        <>
            <Header />
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1"> 
                <Banner/>
                <ProductGrid 
                    data={data} 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    handlePageChange={handlePageChange} 
                    totalCount={totalCount} 
                    maxPrice={maxPrice} 
                />
            </main>
            <Footer />
        </>
    );
};

export default CollectionsAll;
