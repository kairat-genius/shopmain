import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    // Calculate page numbers to display
    const getPageNumbers = () => {
        let startPage, endPage;
        if (totalPages <= 5) {
            // Total pages are less than or equal to 5
            startPage = 1;
            endPage = totalPages;
        } else {
            // Total pages more than 5
            if (currentPage <= 3) {
                // First 3 pages
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                // Last 3 pages
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                // Middle pages
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <a
                    key={i}
                    href="#"
                    onClick={() => handlePageClick(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                    {i}
                </a>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <a
                href="#"
                onClick={() => handlePageClick(currentPage - 1)}
                className={currentPage === 1 ? 'disabled' : ''}
            >
                &laquo;
            </a>
            {getPageNumbers()}
            <a
                href="#"
                onClick={() => handlePageClick(currentPage + 1)}
                className={currentPage === totalPages ? 'disabled' : ''}
            >
                &raquo;
            </a>
        </div>
    );
};

export default Pagination;