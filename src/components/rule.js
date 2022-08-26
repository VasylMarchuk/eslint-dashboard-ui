import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

import 'chartjs-adapter-moment';

export default class Rule {
  constructor() {}
  async render(parentEl, ruleData, rules) {
    let chartContainer = document.createElement("div");
    chartContainer.className = "";

    let canv = document.createElement("canvas");
    canv.id = ruleData.ruleName;
    canv.className = "";

    chartContainer.appendChild(canv);
    parentEl.appendChild(chartContainer);

    new Chart(canv, {
      type: "line",
      data: {
        labels: ruleData.dates,
        datasets: [
          {
            label: ruleData.ruleName,
            data: ruleData.fileCount,
            filePath: ruleData.filePath,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            type: 'time',
            time: {
                unit: 'day'
            }
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              afterBody: function (context) {
                const dataIndex = context[0].dataIndex
                const list = context[0].dataset.filePath[dataIndex].join("\n");
                return list;
              },
            },
          },
        },
      },
    });
  }
}
