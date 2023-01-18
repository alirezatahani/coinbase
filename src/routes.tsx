import React from 'react';
import Home from "@pages/home/index";
import CoinPage from "@pages/coinPage/index";

export const routes = [
    { to: "/", component: <Home /> },
    { to: "/:coinUuid", component: <CoinPage /> },
  ];
  