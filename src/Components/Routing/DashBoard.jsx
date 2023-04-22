import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement } from "chart.js";
Chart.register(LinearScale, CategoryScale, BarElement);
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  DataSets: [
    {
      label: "2020 expense",
      data: [
        10000, 9000, 6000, 12000, 18000, 5000, 4000, 15000, 20000, 13000, 15000,
        16000,
      ],
      backgroundColr: "pink",
    },
    {
      label: "2021 expense",
      data: [
        12000, 19000, 66000, 22000, 8000, 3000, 6000, 15000, 10000, 23000, 5000,
        26000,
      ],
      backgroundColr: "grey",
    },
  ],
};
function DashBoard() {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}
export default DashBoard;
