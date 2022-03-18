import React, { useState, useEffect } from "react";
import axios from "axios";
import "./componentStyles/Services.css";

const Bitcoin = () => {
  const [price, resetPrice] = useState({});
  const fetchBitcoinPrice = () => {
    axios
      .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((res) => {
        resetPrice(res.data.bpi.USD);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBitcoinPrice();
  }, []);

  // if (error) {
  //   return <h2>We got an error: {error}</h2>;
  // }

  // if (isFetching) {
  //   return <h2>Fetching ₿itcoin price...</h2>;
  // }

  const handleClick = () => {
    fetchBitcoinPrice();
  };

  return (
    <div>
      <h1 className="theBigB">₿</h1>
      <h2 className="price">${price.rate}</h2>
      <h4 className="denomination">{price.description}</h4>
      <button className="glow-on-hover getPrice" onClick={handleClick}>
        see current price
      </button>
    </div>
  );
};
export default Bitcoin;
