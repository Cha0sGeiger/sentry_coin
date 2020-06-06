import axios from "axios";

export const baseURL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=`;
export const newCryptoCoin = `${baseURL}BTC,ETH&tsyms=USD,EUR&api_key=`;
export const apiKey = `446a11fb0fc6eba439a14fbb4e2b0b317ba9bc8cb6510ee8a72e130e36f912be`;
const money = "&tsyms=USD,EUR&api_key=";

let coins = "BTC,ETH,IOT,DASH,ETC,EOS,LTC,XRP,BNB";

export const getCryptoPrice = async () => {
  const result = await axios
    .get(baseURL + coins + money + apiKey)
    .then(({ data }) => data);

  return result;
};
