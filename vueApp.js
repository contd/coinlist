const url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,LTC,XLM,XMR&tsyms=USD,EUR";

const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    symbols: {
      BTC: 'Bitcoin',
      BCH: 'Bitcoin Cash',
      ETH: 'Ethereum',
      LTC: 'Litecoin',
      XLM: 'Stellar',
      XMR: 'Monero'
    }
  },
  mounted: () => {
    axios.get(url)
      .then(response => {
        this.results = response.data
      });
  }
});
