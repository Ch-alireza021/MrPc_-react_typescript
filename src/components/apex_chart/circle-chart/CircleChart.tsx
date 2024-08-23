import React from "react";
import Chart from "react-apexcharts";

export const CircularChart: React.FC = () => {
  const chartOptions = {
    chart: {
      type: "donut" as const,
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35
    },
    labels: ["Item 1", "Item 2", "Item 3", "Item 4"],
    colors: ["#FF4560", "#008FFB", "#00E396", "#775DD0"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series: number[] = [44, 55, 41, 67];
  return (
    <Chart options={chartOptions} series={series} type="donut" width="100%"  height={350} />
  );
};
