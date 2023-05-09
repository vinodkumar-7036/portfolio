import React, { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(ArcElement, Tooltip, Legend, Title);

function DashBoard() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((response) =>
      response.json().then((json) => setProduct(json.products))
    );
  }, []);
  product.length = 5;
  console.log(product);
  return (
    <div className="container-fluid">
      <h1>Pie Chart</h1>
      <div className="row">
        <div className="col-md-5 mb-3 mt-3">
          {product.length && (
            <div className="classPie" style={{ width: "600px" }}>
              <Pie
                width={400}
                height={200}
                data={{
                  labels:
                    product.length && product.map((val, index) => val.title),

                  datasets: [
                    {
                      label: "# of votes",
                      data:
                        product.length &&
                        product.map((val, index) => val.price / 10),
                      backgroundColor: [
                        "rgba(255,99,132,0.2)",
                        "rgba(54,162,235,0.2)",
                        "rgba(255,206,86,0.2)",
                        "rgba(75,192,192,0.2)",
                        "rgba(153,102,255,0.2)",
                        "rgba(255,159,64,0.2)",
                      ],
                      borderColor: [
                        "rgba(255,99,132,0.2)",
                        "rgba(54,162,235,0.2)",
                        "rgba(255,206,86,0.2)",
                        "rgba(75,192,192,0.2)",
                        "rgba(153,102,255,0.2)",
                        "rgba(255,159,64,0.2)",
                      ],
                      borderWidth: 1,
                      hoverOffset: 20,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    title: {
                      fontSize: 30,
                      text: "Chart js Tutorial",
                      display: true,
                      font: { size: 30 },
                    },
                    legend: {
                      labels: {
                        font: { size: 30 },
                      },
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
