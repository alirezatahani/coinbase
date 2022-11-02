import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GetCoinsData ,FavoriteCoins} from "@modules/index";
import { Tabs } from "antd";
import { tabs } from "../utils/tabs";
import { Badge, FlexWrapperBadge, HomeStyle } from "../style/home_styles";
import "antd/dist/antd.css";


export default function Home() {
  const [searchCoin, setSearchCoin] = useState("");
  const { TabPane } = Tabs;
const [limit, setLimit] = useState(10);
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
