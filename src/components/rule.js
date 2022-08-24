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

export default class Rule {
  constructor() {}
  async render(parentEl, ruleData, rules) {

    let chartContainer = document.createElement('div');
    chartContainer.className = '';


    let canv = document.createElement('canvas');
    canv.id = ruleData.ruleName;
    canv.className = "";

    chartContainer.appendChild(canv);
    parentEl.appendChild(chartContainer);

    const myChart = new Chart(canv, {
      type: "line",
      data: {
        labels: ruleData.dates,
        datasets: [
          {
            label: ruleData.ruleName,
            data: ruleData.fileCount,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              afterBody: function(context) {
                const list = rules[[context[0].label]][ruleData.ruleName].join("\n")
                console.log(list);
                return list;
              }
            }
          }
        }
      },
    });
  }
}
