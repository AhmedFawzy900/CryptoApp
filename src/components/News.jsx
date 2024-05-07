import React, { useState, useSyncExternalStore } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment';
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from './Loader';
const { Title , Text} = Typography;
const {Option} = Select;
const demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    count: simplified ? 6 : 12
    , newsCategory: newsCategory
  });
  const {data} = useGetCryptosQuery(100);
 
  if(!cryptoNews?.articles){
    return <Loader/>;
  };


  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value='Cryptocurrency'>Cryptocurrency</Option>
            {data?.data?.coins?.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews?.articles.map((news,index)=>(
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank'>
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                <img style={{width: '100px', height: '100px' , objectFit: 'cover'}} src={news.urlToImage || demoImg} alt="news"/>
              </div>
              <p>{news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Text>Source: {news.source.name}</Text>
                </div>
                <div>
                  <Text>
                    {moment(news.publishedAt).startOf('ss').fromNow()}
                  </Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
