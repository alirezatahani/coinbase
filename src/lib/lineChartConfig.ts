import { theme } from "@global/Global";
import { numberToPrice } from "@utils/numberToPrice";
import { useAppSelector } from "hooks/hooks";
import { CoinInterface } from "types";

export const linChartConfig = (coin: CoinInterface) => {
  const referenceCurrency = useAppSelector((state) => state.referenceCurrency);
  const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);
  const { sign } = referenceCurrency;
  const series = coin.sparkline?.map((item: string) => {
    return Number(item);
  });
  const priceChange = () => {
    if (Number(coin.change) === null) return 0;
    return Number(coin.change) > 0 ? `+${coin.change}` : coin.change;
  };

  const options = {
    chart: {
      styleMode: true,
      height: 300,
      backgroundColor: "transparent",
      spacing: [15, 15, 0, 15],
    },
    colors: Number(coin.change >= 0)
      ? [theme.palette.success.main]
      : [theme.palette.danger.main],
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    title: {
      text: "",
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
      },
    },
    boost: {
      enabled: false,
    },
    yAxis: [
      {
        title: {
          text: "Price",
        },
        gridLineWidth: 0.1,
      },
    ],
    xAxis: [
      {
        title: {
          text: timePeriod,
        },
        crosshair: {
          enabled: true,
          width: 1,
        },
      },
    ],
    tooltip: {
      formatter: function () {
        return numberToPrice(this.y, sign);
      },
      enabled: true,
      animation: true,
      borderColor: theme.palette.border.color,
      borderRadius: 15,
    },
    series: [
      {
        data: series,
      },
    ],
  };
  return options;
};
