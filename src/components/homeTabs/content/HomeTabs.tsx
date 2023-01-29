import React, { useState } from "react";
import { Tabs } from "antd";
import { useAppSelector } from "hooks/hooks";
import { FavoriteCoins } from "@modules/index";
import { GetCoinsData } from "@modules/index";
import FavLengthBadge from "./FavLengthBadge";
import { HomeTabsProps } from "../content/homeTabs_type";
import { tabs } from "../utils/tabs";
import { TabContainer } from "../style/HomeTabs_styles";

const HomeTabs: React.FC<HomeTabsProps> = ({ currency }) => {
  const [limit, setLimit] = useState(10);
  const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);
  const { TabPane } = Tabs;
  return (
    <TabContainer>
      <Tabs centered>
        {tabs.map((tab) => {
          const { key, name, queries } = tab;
          switch (name) {
            case "Favorite Coins":
              return (
                <TabPane tab={<FavLengthBadge />} key={key}>
                  <FavoriteCoins
                    timePeriod={timePeriod}
                    referenceCurrencyUuid={currency.value}
                    currencySign={currency.sign}
                  />
                </TabPane>
              );
            default:
              return (
                <TabPane tab={name} key={key}>
                  <GetCoinsData
                    queries={{
                      ...queries,
                      timePeriod,
                      limit,
                      referenceCurrencyUuid: currency.value,
                    }}
                    currencySign={currency.sign}
                  />
                </TabPane>
              );
          }
        })}
      </Tabs>
    </TabContainer>
  );
};

export default HomeTabs;
