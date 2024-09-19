import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import Cookies from "js-cookie";
import "./Profile.css";
import "../../../css/customer.css";
import { Router, useNavigate } from "react-router-dom";
import { getProfileListOrders } from "../../../api/User/Profile/getProfileListOrders.jsx";
import { formatPrice } from '../../../hooks/formatPrice.js';
const Profile = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const accessToken = Cookies.get("access");

  if (!accessToken) {
    navigate("/account/login");
  }
  useEffect(() => {
    getProfileListOrders(setData);
  }, []);

  const handleLogout = () => {
    Cookies.remove("refresh");
    Cookies.remove("access");
    navigate("/");
  };



return (
  <>
    <Header />
    <main
      id="MainContent"
      className="content-for-layout focus-none"
      role="main"
      tabindex="-1"
    >
      <div
        id="shopify-section-template--22795098882384__main"
        className="shopify-section"
      >
        <div className="customer account section-template--22795098882384__main-padding">
          <div>
            <h1 className="customer__title">Учетная запись</h1>
            <a href="/" onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                fill="none"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                  fill="currentColor"
                ></path>
              </svg>
              Выйти
            </a>
          </div>

          <div>
            <div>
              <h2>История заказов</h2>

              <table role="table" className="order-history">
                <caption className="visually-hidden">История заказов</caption>
                <thead role="rowgroup">
                  <tr role="row">
                    <th id="ColumnOrder" scope="col" role="columnheader">
                      Заказ
                    </th>
                    <th id="ColumnDate" scope="col" role="columnheader">
                      Дата
                    </th>
                    <th id="ColumnPayment" scope="col" role="columnheader">
                      Статус оплаты
                    </th>
                    <th
                      id="ColumnFulfillment"
                      scope="col"
                      role="columnheader"
                    >
                      Статус выполнения
                    </th>
                    <th id="ColumnTotal" scope="col" role="columnheader">
                      Всего
                    </th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                {data.map((order) => (
                  <tr role="row" key={order.orderNumber}>
                    <td
                      id="RowOrder"
                      role="cell"
                      headers="ColumnOrder"
                      data-label="Заказ"
                    >
                      <a
                        href={`/account/order/${order.id}`}
                        aria-label={`Номер заказа: #${order.id}`}
                      >
                        #{order.orderNumber}
                      </a>
                    </td>
                    <td
                      headers="RowOrder ColumnDate"
                      role="cell"
                      data-label="Дата"
                    >
                      
                      <time dateTime={order.created_at}>
                             {new Date(order.created_at).toLocaleDateString(
                              "ru-RU",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </time>
                    </td>
                    <td
                      headers="RowOrder ColumnPayment"
                      role="cell"
                      data-label="Статус оплаты"
                    >
                     
                     {!order.paid ? "Ожидает подтверждения" : "Оплачено"}
                    </td>
                    <td
                      headers="RowOrder ColumnFulfillment"
                      role="cell"
                      data-label="Статус выполнения"
                    >
                      {!order.completed ? "Не выполнен" : "Выполнен"}
                    </td>
                    <td
                      headers="RowOrder ColumnTotal"
                      role="cell"
                      data-label="Всего"
                    >
                      {formatPrice(order.amount)} ₽
                    </td>
                  </tr>
                ))}
                </tbody>
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