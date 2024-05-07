import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoApi'

const Exchanges = () => {
  const {data,isFetching} = useGetExchangesQuery();

  console.log(data);
  return (
    <div>
      exch
    </div>
  )
}

export default Exchanges
