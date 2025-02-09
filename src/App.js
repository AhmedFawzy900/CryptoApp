import logo from './logo.svg';
import './App.css';
import {Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components';
import { Layout, Space, Typography } from 'antd';
import { Link, Route, Routes, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />

            </Routes>
          </div>
        </Layout>
        {/* <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div> */}
      </div>
    </div>
  );
}

export default App;
