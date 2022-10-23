import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GetCoinsData ,FavoriteCoins} from "@modules/index";
import { Tabs } from "antd";
import { Badge, FlexWrapperBadge, HomeStyle } from "../style/home_styles";
import "antd/dist/antd.css";

export default function Home() {
  const { TabPane } = Tabs;
  const [limit, setLimit] = useState(10);
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  const tabs = [
    {
      name: "All",
      key: "1",
      queries: {},
    },
    {
      name: "Favorite Coins",
      key: "2",
    },
    {
      name: "Gainers",
      key: "3",
      queries: { orderBy: "change", orderDirection: "desc", scopeLimit: 200 },
    },
    ,
    {
      name: "Losers",
      key: "4",
      queries: { orderBy: "change", orderDirection: "asc", scopeLimit: 200 },
    },
    {
      name: "New",
      key: "5",
      queries: { orderBy: "listedAt", orderDirection: "desc" },
    },
  ];

  return (
    <HomeStyle>
      <Tabs>
        {tabs.map((tab) => {
          const { key, name, queries } = tab;
          switch (name) {
            case "Favorite Coins":
              return (
                <TabPane
                  tab={
                    <FlexWrapperBadge>
                      <span>Favorite Coins</span>
                      <Badge>{favoriteList.length}</Badge>
                    </FlexWrapperBadge>
                  }
                  key={key}
                >
                  <FavoriteCoins />
                </TabPane>
              );

            default:
              return (
                <TabPane tab={name} key={key}>
                  <GetCoinsData queries={{ ...queries, limit }} />
                </TabPane>
              );
          }
        })}
      </Tabs>
    </HomeStyle>
  );
}
