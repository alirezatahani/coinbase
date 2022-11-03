import { theme } from "@global/Global";

export const linChartConfig = (coin: any) => {
  const series = coin.sparkline?.map((item: string) => {
    return Number(item);
  });
  const priceChange = () => {
    if (Number(coin.change) === null) return 0;
    return Number(coin.change) > 0 ? `+${coin.change}` : coin.change;
  };

  const options = {
    chart: {
      height: 60,
      width: 100,
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
    caption: {
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
    yAxis: [
      {
        title: {
          text: "",
        },
        labels: { enabled: false },
        visible: false,
      },
    ],
    xAxis: [
      {
        title: {
          text: "",
        },
        labels: { enabled: false },
        visible: false,
      },
    ],
    tooltip: {
      enabled: false,
    },
    series: [
      {
        data: series,
      },
    ],
  };
  return options;
};
