// src/components/AnalyticsDashboard.js

import { Bar, Line, Pie } from 'react-chartjs-2';

const AnalyticsDashboard = () => {
  // Sample data for charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Expenses',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Profit',
        data: [40, 30, 50, 60, 40, 60],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)', 'rgba(255,205,86,1)'],
      },
    ],
  };

  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      <div className="charts">
        <div className="chart">
          <h3>Sales vs Expenses</h3>
          <Bar data={barChartData} />
        </div>
        <div className="chart">
          <h3>Profit Over Time</h3>
          <Line data={lineChartData} />
        </div>
        <div className="chart">
          <h3>Traffic Sources</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
