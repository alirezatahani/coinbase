import React, { useCallback,useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { CoinsTable } from "@components/CoinsTable";
import useFetch from "../../../hooks/useFetch";
import {
  Badge,
  FlexWrapperBadge,
  HomeStyle,
  Input,
} from "../style/home_styles";
import AllCoins from "@modules/allCoins/content/allCoins";
import NewCoins from "@modules/newCoins/content/newCoins";
import FavoriteCoins from "@modules/favoriteCoins/content/favoriteCoins";
import GainerCoins from "@modules/gainerCoins/content/gainerCoins";
import LoserCoins from "@modules/loserCoins/content/loserCoins";

export default function Home() {
  const [searchCoin, setSearchCoin] = useState("");
  const { TabPane } = Tabs;
  const [{ loading, data }, doFetch] = useFetch();
  const favoriteReducers = useSelector((state: any) => state.FavoriteReducer);
  const { favoriteList } = favoriteReducers;

  const searchingCoin = async (searchValue: string) => {
    try {
      await doFetch({
        url: `/search-suggestions?query=${searchValue}`,
        method: "GET",
      });
    } catch (e) {}
  };
  const handler = useCallback(debounce(searchingCoin, 600), []);
  const onSearch = (searchValue: string) => {
    setSearchCoin(searchValue);
    handler(searchValue);
  };

  return (
    <HomeStyle>
      <Input
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <AllCoins />
        </TabPane>
        <TabPane
          tab={
            <FlexWrapperBadge>
              <span>Favorite Coins</span>
              <Badge>{favoriteList.length}</Badge>
            </FlexWrapperBadge>
          }
          key="2"
        >
          <FavoriteCoins />
        </TabPane>
        <TabPane tab="New" key={3}>
          <NewCoins />
        </TabPane>
        <TabPane tab="Gainers" key={4}>
          <GainerCoins />
        </TabPane>
        <TabPane tab="Losers" key={5}>
          <LoserCoins />
        </TabPane>
      </Tabs>
    </HomeStyle>
  );
}
