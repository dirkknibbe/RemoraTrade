import axios from "axios";

const fetchBitcoinPrice = () => {
  axios
    .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then((res) => {
      console.log(res.data.bpi.USD);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchBitcoinPrice;
