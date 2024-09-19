import React, { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "react-toastify/ReactToastify.css"


import { ToastContainer, toast} from 'react-toastify';

import { useURL } from "../src/hooks/useURL";
const Home = lazy(() => import("../src/pages/Home/Home"));
const CollectionsAll = lazy(() =>
  import("../src/pages/Collections/CollectionsAll/CollectionsAll")
);
const Contact = lazy(() => import("../src/pages/Contact/Contact"));
const Portfolio = lazy(() => import("../src/pages/Portfolio/Portfolio"));
const About = lazy(() => import("../src/pages/About/About"));
const Login = lazy(() => import("../src/pages/User/Login/Login"));
const Register = lazy(() => import("../src/pages/User/Register/Register"));
const Reset = lazy(() => import("../src/pages/User/Reset/Reset"));
const Cart = lazy(() => import("../src/pages/User/Cart/Cart"));
const Payment = lazy(() => import("../src/pages/User/Payment/Payment"));
const ManagerPayment = lazy(() => import("../src/pages/User/Payment/MenegerPayment"))
const ProductDetail = lazy(() =>
  import("../src/pages/ProductDetail/ProductDetail")
);
const Profile = lazy(() => import("../src/pages/User/Profile/Profile"));
const NotFound404 = lazy(() => import("../src/pages/NotFound404/NotFound404"));
const OrdersDetail = lazy(() =>
  import("../src/pages/User/OrdersDetail/OrdersDetail")
);
const Search = lazy(() => import("../src/pages/Search/Search"));

import useTokenRefresh from "./api/User/postTokenRefresh";
import "./App.css";


const Root = () => {
  const url = useURL();

  return (
    <Suspense fallback={<div className="loader"></div>}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path={url.CollectionsAll.path} element={<CollectionsAll />} />
          <Route path={url.Contact.path} element={<Contact />} />
          <Route path={url.Portfolio.path} element={<Portfolio />} />
          <Route path={url.About.path} element={<About />} />
          <Route path={url.Login.path} element={<Login />} />
          <Route path={url.Register.path} element={<Register />} />
          <Route path={url.Reset.path} element={<Reset />} />
          <Route path={url.Cart.path} element={<Cart />} />
          <Route path={url.Payment.path} element={<Payment />} />
          <Route path={url.ManagerPayment.path} element={<ManagerPayment />} />
          <Route path={url.ProductDetail.path} element={<ProductDetail />} />
          <Route path={url.Profile.path} element={<Profile />} />
          <Route path={url.OrderDetails.path} element={<OrdersDetail />} />
          <Route path={url.Search.path} element={<Search />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

// Конфигурация роутера
const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

const App = () => {
  useTokenRefresh();

  return (
    <div>
      <RouterProvider router={router} />
    
      <a href="/back_media/service/static/pig_in_minecraft_farm_animal_3d_hd__by_sorayascorner_dhnvk8z-fullview.webp" download="awdawd.webp">Скачать файл</a>
      <ToastContainer

      />
    </div>
  );
};

export default App;
