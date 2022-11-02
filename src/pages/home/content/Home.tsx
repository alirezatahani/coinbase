import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { GetCoinsData, FavoriteCoins } from "@modules/index";
import { CoinList } from "@components/coinsList";
import useFetch from "../../../hooks/useFetch";
import { Tabs } from "antd";
import { tabs } from "../utils/tabs";
import {
  Badge,
  FlexWrapperBadge,
  HomeStyle,
  Input,
} from "../style/home_styles";
import "antd/dist/antd.css";

export default function Home() {
  const [searchCoin, setSearchCoin] = useState("");
  const [limit, setLimit] = useState(10);
  const [{ loading, data }, doSearchCoin] = useFetch();
  const { TabPane } = Tabs;
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  const searchingCoin = async (searchValue: string) => {
    try {
      await doSearchCoin({
        url: `/search-suggestions?query=${searchValue}`,
        method: "GET",
      });
    } catch (e) {}
  };
  const handler = useCallback(debounce(searchingCoin, 600), []);
  const searchHandler = (searchValue: string) => {
    setSearchCoin(searchValue);
    handler(searchValue);
  };

  return (
    <HomeStyle>
      <Input
        placeholder="Search..."
        onChange={(e) => searchHandler(e.target.value)}
      />
      {searchCoin ? (
        <CoinList loading={loading} data={data && data.data.coins} />
      ) : (
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
      )}
    </HomeStyle>
  );
}
