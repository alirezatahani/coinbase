// import Highcharts from "highcharts/highstock";
// import Chart from "highcharts-react-official";
// import { linChartConfig } from "lib/lineChartConfig";
export const linChartConfig = (response:any)=>{
    console.log(response);
    const options = {
        chart: {
          height: 50,
          width: 100,
          backgroundColor:"transparent"
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        title: {
          text: "",
        },
        caption:{
          align:"center",
          floating:true,
          margin:10,
          style:{"color": "rgb(234, 12, 12)"},
          text:"0.07",
          verticalAlign:"top",
          y:0,
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
            data: [
              19159.255374818717, 19164.338120942753, 19175.690835764806,
              19195.3060126722, 19210.908757715795, 19231.862445768125,
              19223.833196173593, 19203.859033555076, 19173.43887071239,
              19180.521276641204, 19194.909911377385, 19208.714002261393,
              19206.744858773174, 19205.099249118128, 19216.085373512386,
              19215.440367918043, 19195.123159597937, 19192.41395337472,
              19206.568354848976, 19213.976985240337, 19208.5749552117,
              19197.97957369323, 19191.083380237356, 19175.245654932096,
              19184.55076295299,
            ],
          },
        ],
      };

return 
}