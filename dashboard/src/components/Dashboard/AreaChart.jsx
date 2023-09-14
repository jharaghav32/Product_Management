import React from 'react'
import ReactApexChart from 'react-apexcharts';
const AreaChart = () => {
    // Sample data for the area chart
    const seriesData = [
      {
        name: 'Series 1',
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      },
     
    ];
  
    const chartOptions = {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      yaxis: {
        title: {
          text: 'Sales'
        }
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    };
  
    return (
      <ReactApexChart
        options={chartOptions}
        series={seriesData}
        type="area"
        height={350}
      />
    );
  };
  
  export default AreaChart;
  