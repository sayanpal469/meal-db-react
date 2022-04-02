import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
          <div className='order-2 md:order-1'>
            <h1 className='text-3xl'>General Info:</h1>
            <hr />
            <h1>Coin Name: </h1>
            <h1>Market Cap Rank: </h1>
            
            <h1>Contract Address: </h1>
            <h1>Hashing Algorithm: </h1>
            <h1>Genesis Date: </h1>
            <h1>Last Updated: </h1>

            <h1 className='text-3xl mt-4'>Scores:</h1>
            <hr />
            <h1>Community Score: </h1>
            <h1>Developer Score: </h1>
            <h1>Liquidity Score: </h1>
            <h1>Public Interest Score: </h1>
          </div>
          <div className='flex order-1 md:order-2 justify-center items-center'>
            <img src='' alt='coinImg' />
          </div>
        </div>
      </div>
    );
};

export default Details;