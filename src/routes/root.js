import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";

import myRouter from "./myRouter";
import paymentRouter from "./paymentRouter";

const LazyMainPage = lazy(() => import("../pages/main/MainPage"));
const LazyMenuPage = lazy(() => import("../pages/menu/MenuPage"));
const LazyDetailPage = lazy(() => import("../pages/menu/DetailPage"));
const LazyShopDetailPage = lazy(() => import("../pages/shop/ShopDetailPage"));
const LazyMyPage = lazy(() => import("../pages/my/MyPage"));
const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyKaKaoPage = lazy(() => import("../pages/login/KakaoRedirectPage"));
const LazyJoinPage = lazy(() => import("../pages/join/JoinPage"));
const LazyPaymentPage = lazy(() => import("../pages/pay/PaymentPage"));
const LazyCartPage = lazy(() => import("../pages/cart/CartPage"));
const LazyJoinTOSPage = lazy(() => import("../pages/join/JoinTOS"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  // Menu Area
  {
    path: "/menu",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMenuPage />
      </Suspense>
    ),
  },
  {
    path: "/menus/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/my/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMyPage />
      </Suspense>
    ),
    children: myRouter(),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyLoginPage />
      </Suspense>
    ),
  },
  {
    path: "/login/kakao",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyKaKaoPage />
      </Suspense>
    ),
  },
  {
    path: "/join",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyJoinPage />
      </Suspense>
    ),
  },
  {
    path: "/payment/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyPaymentPage />
      </Suspense>
    ),
    children: paymentRouter(),
  },
  // shop Area
  {
    path: "/shop/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyShopDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyCartPage />
      </Suspense>
    ),
  },

  {
    path: "/joinTOS",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyJoinTOSPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <h1>.</h1>,
  },
]);

export default router;
