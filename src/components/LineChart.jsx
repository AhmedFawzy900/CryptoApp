import React, { useEffect, useState } from 'react';
import { Col, Row, Typography } from 'antd';
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import Loader from './Loader';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, timePeriod }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!coinHistory?.data?.history) return;

    const coinPrice = [];
    const coinTimestamp = [];
    for (let i = 0; i < coinHistory.data.history.length; i += 1) {
      coinPrice.push(coinHistory.data.history[i].price);
      coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    const labels = coinTimestamp;
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Price",
          backgroundColor: '#0071bd',
          borderColor: "#0071bd",
          data: coinPrice,
        },
      ],
    };

    setChartData(data);

  }, [coinHistory, timePeriod]);

  if (!chartData) return <Loader />;

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={chartData} />
    </>
  );
};

export default LineChart;
