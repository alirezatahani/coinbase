import { theme } from "@global/Global";
import { numberToPrice } from "@utils/numberToPrice";

export const linChartConfig = (coin: any, bigChart?: boolean) => {
  const series = coin.sparkline?.map((item: string) => {
    return Number(item);
  });
  const priceChange = () => {
    if (Number(coin.change) === null) return 0;
    return Number(coin.change) > 0 ? `+${coin.change}` : coin.change;
  };

  const options = {
    chart: {
      height: bigChart ? 300 : 60,
      width: bigChart ? null : 100,
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
    caption: bigChart
      ? null
      : {
          align: "center",
          floating: true,
          margin: 10,
          style: {
            color: Number(coin.change >= 0)
              ? theme.palette.success[400]
              : theme.palette.danger[400],
          },
          text: priceChange(),
          verticalAlign: "bottom",
          y: -25,
        },
    plotOptions: {
      series: {
        allowPointSelect: true,
      },
    },
    boost: {
      enabled: false,
    },
    yAxis: bigChart
      ? [
          {
            title: {
              text: "Price",
            },
            gridLineWidth: 0.1
          },
        ]
      : [
          {
            title: {
              text: "",
            },
            labels: { enabled: false },
            visible: false,
          },
        ],
    xAxis: bigChart
      ? [
          {
            title: {
              text: "24H",
            },
            crosshair: {
              enabled: true,
              width: 1,
            },
          },
        ]
      : [
          {
            title: {
              text: "",
            },
            labels: { enabled: false },
            visible: false,
          },
        ],
    tooltip: {
      formatter: function () {
        return "$ " + numberToPrice(this.y);
      },
      enabled: true,
      animation: true,
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.common.black,
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
