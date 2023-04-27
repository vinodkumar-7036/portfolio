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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 100, 200, 300, 400, 500, 600, 500, 300, 200, 800],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: [10, 100, 200, 300, 400, 500, 600],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: [10, 100, 200, 400, 700, 800, 900],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 1",
    },
  ],
};
function DashBoard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Bar data={data} />
    </div>
  );
}
export default DashBoard;
