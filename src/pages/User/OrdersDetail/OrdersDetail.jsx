import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import { getProfileDetailOrder } from "../../../api/User/Profile/getProfileDetailOrder.jsx";
import "./OrdersDetail.css";
import "../../../css/customer.css";
import NotFound404 from "../../NotFound404/NotFound404.jsx";
import { formatPrice } from "../../../hooks/formatPrice.js";

import { getProfileDownloadFile } from "../../../api/User/Profile/getProfileDownloadFile.jsx";

const Profile = () => {
  const { order_id } = useParams();
  const [data, setData] = useState([]);
  const [dataDownload, setDataDownload] = useState([])
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (order_id) {
      getProfileDetailOrder(setData, order_id, setError, setProductData);
    }
  }, [order_id]);
 
  console.log(data)


  const handleDownload = (productId) => {
    getProfileDownloadFile(order_id, productId)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `file_${productId}.pdf`); 
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error('Ошибка при скачивании файла:', error);
      });
  };


  if (error?.response?.status === 404) {
    return <NotFound404 />;
  }


  return (
    <>
      <Header />
      <main
        id="MainContent"
        className="content-for-layout focus-none"
        role="main"
        tabIndex="-1"
      >
        <div
          id="shopify-section-template--22795099013456__main"
          className="shopify-section"
        >
          <div className="customer order section-template--22795099013456__main-padding">
            <svg style={{ display: "none" }}>
              <symbol id="icon-discount" viewBox="0 0 12 12">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z"
                  fill="currentColor"
                ></path>
              </symbol>
            </svg>
            <div>
              <h1 className="customer__title">Учетная запись</h1>
              <a href="/account">Вернуться к сведениям учетной записи</a>
            </div>

            <div>
              <div>
                <h2>Заказ: #{productData.orderNumber}</h2>
                <p>
                  Размещен:{" "}
                  <time dateTime={productData.created_at}>
                    {new Date(productData.created_at).toLocaleString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </p>
                <table role="table" className="order-details">
                  <caption className="visually-hidden">Заказ: #1006</caption>
                  <thead role="rowgroup">
                    <tr role="row">
                      <th id="ColumnProduct" scope="col" role="columnheader">
                        Товар
                      </th>
                      <th id="ColumnSku" scope="col" role="columnheader"></th>
                      <th id="ColumnPrice" scope="col" role="columnheader">
                        Цена
                      </th>
                      <th
                        id="ColumnQuantity"
                        scope="col"
                        role="columnheader"
                      ></th>
                      <th id="ColumnTotal" scope="col" role="columnheader">
                        Файл
                      </th>
                    </tr>
                  </thead>
                  {data.map((product) => (
                    <tbody role="rowgroup" key={product.id}>
                      <tr role="row">
                        <td
                          id="Row16174488944976"
                          headers="ColumnProduct"
                          role="rowheader"
                          scope="row"
                          data-label="Товар"
                        >
                          <div>
                            <a href={`/product/${product.slug}`}>
                              {product.name}
                            </a>
                          </div>
                        </td>
                        <td
                          headers="Row16174488944976 ColumnSku"
                          role="cell"
                          data-label="Артикул"
                        ></td>
                        <td
                          headers="Row16174488944976 ColumnPrice"
                          role="cell"
                          data-label="Цена"
                        >
                          <span>{formatPrice(product.price)} ₽</span>
                        </td>
                        <td
                          headers="Row16174488944976 ColumnQuantity"
                          role="cell"
                          data-label="Количество"
                        ></td>
                        <td
                          headers="Row16174488944976 ColumnTotal"
                          role="cell"
                          data-label="Скачать файл"
                        >
                          {productData.paid ? (
                          <a
                            href="#"
                            onClick={() => handleDownload(product.id)}
                          >
                            Скачать файл
                          </a>
                        ) : (
                          <span>Файл недоступен</span>
                        )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                  <tfoot role="rowgroup">
                    <tr role="row">
                      <td
                        id="RowTotal"
                        role="rowheader"
                        scope="row"
                        colSpan="3"
                      >
                        Всего
                      </td>
                      <td
                        headers="RowTotal"
                        role="cell"
                        colSpan="2"
                        data-label="Всего"
                      >
                        {formatPrice(productData.amount)} ₽
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
