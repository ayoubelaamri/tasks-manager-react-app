import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function PieChart(props:{data:number[]}) {
    const series = props?.data
    const options = {
        labels: ['Unassigned', 'Assigned', 'In Progress', 'Completed'],
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        legend: {
            show: false,
            // position: 'bottom'
        },
        yaxis: {
            show: false
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0,
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                color: '#9942e3',
                // shadeTo: 'light',
                shadeIntensity: 0.6
            }
        }
    }
    return (

        <div id="chart">
            <ReactApexChart options={options} series={series} type="polarArea" width={200} />
        </div>

    )
}
