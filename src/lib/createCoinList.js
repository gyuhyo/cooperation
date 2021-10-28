import axios from 'axios';

export function CreateCoinList() {
  const coinList = [];

  const getCoinList = async () => {
    try {
      await axios
        .get('https://api.upbit.com/v1/market/all')
        .then((response) => {
          const tmpCoinList = response.data.filter((el) => {
            return el.market.substring(0, 3) === 'KRW';
          });

          tmpCoinList.map((data, key) => {
            coinList.push({
              key: key,
              market: data.market,
              name: data.korean_name,
              price: 0,
              updown: 0,
            });
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  getCoinList();

  return coinList;
}
