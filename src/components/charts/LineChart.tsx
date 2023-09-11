import React from 'react'
import Chart from "react-apexcharts";

export default function LineChart() {
    const [dates,setDates] = React.useState([
        "13 Nov",
        "14 Nov",
        "15 Nov",
        "16 Nov",
        "17 Nov",
        "20 Nov",
        "21 Nov",
        "22 Nov",
        "23 Nov",
        "24 Nov",
        "27 Nov",
        "28 Nov",
        "29 Nov",
        "30 Nov",
        "01 Dec",
        "04 Dec",
        "05 Dec",
        "06 Dec",
        "07 Dec",
        "08 Dec"
      ])
    const [series, setSeries] = React.useState([{
        name: 'Completed',
        data: [
            8107.85,
            8128.0,
            8122.9,
            8165.5,
            8340.7,
            8423.7,
            8423.5,
            8514.3,
            8481.85,
            8487.7,
            8506.9,
            8626.2,
            8668.95,
            8602.3,
            8607.55,
            8512.9,
            8496.25,
            8600.65,
            8881.1,
            9340.85
          ]
    }]);

    const [options, setOptions] = React.useState({
        annotations: {
            yaxis: [
              {
                y: 8200,
                borderColor: "#00E396",
                label: {
                  borderColor: "#00E396",
                  style: {
                    color: "#fff",
                    background: "#00E396"
                  },
                  text: "Support"
                }
              },
              {
                y: 8600,
                y2: 9000,
                borderColor: "#FEB019",
                opacity: 0.1,
                label: {
                  borderColor: "#333",
                  style: {
                    fontSize: "10px",
                    color: "#333",
                    background: "#FEB019"
                  },
                  text: "Y-axis range"
                }
              }
            ],
            xaxis: [
              {
                x: new Date("23 Nov 2017").getTime(),
                strokeDashArray: 0,
                borderColor: "#775DD0",
                label: {
                  borderColor: "#775DD0",
                  style: {
                    color: "#fff",
                    background: "#775DD0"
                  },
                  text: "Anno Test"
                }
              },
              {
                x: new Date("26 Nov 2017").getTime(),
                x2: new Date("28 Nov 2017").getTime(),
                borderColor: "#B3F7CA",
                opacity: 0.5,
                label: {
                  borderColor: "#B3F7CA",
                  style: {
                    fontSize: "10px",
                    color: "#fff",
                    background: "#00E396"
                  },
                  offsetY: -10,
                  text: "X-axis range"
                }
              }
            ],
            points: [
              {
                x: new Date("01 Dec 2017").getTime(),
                y: 8607.55,
                marker: {
                  size: 8,
                  fillColor: "#fff",
                  strokeColor: "red",
                  radius: 2,
                  cssClass: "apexcharts-custom-class"
                },
                label: {
                  borderColor: "#FF4560",
                  offsetY: 0,
                  style: {
                    color: "#fff",
                    background: "#FF4560"
                  },
      
                  text: "Point Annotation"
                }
              }
            ]
          },
      
          chart: {
            // height: 350,
            // type: "line",
            // id: "areachart-2"
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            // curve: "stepline"
          },
          grid: {
            padding: {
              right: 30,
              left: 20
            }
          },
      
          title: {
            text: "Line with Annotations",
            // align: "left"
          },
          labels: dates,
          xaxis: {
            // type: "datetime"
          }
    })
    
    return (
        <div id="chart">
            <Chart
                options={options}
                series={series}
                type="line"
                height="350"
            />
        </div>

    )
}
