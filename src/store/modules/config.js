const state = {
  ENDS_AFTER: 42,
  SALE_URL: 'https://fundraiser.cosmos.network',
  SELF_URL: 'https://cosmos.network/',
  ANNOUNCE_DATETIME: '2017-03-15 14:00:00',
  START_DATETIME: '2017-03-31 13:00:00',
  PASSWORD_MIN: 8,
  PASSWORD_MAX: 512,
  ATOM: {
    MIN_BUY: 20,
    MAX_BUY: 1000000
  },
  COINS: {
    BTC: {
      ADDRESS: '1EJyXYXPRRiPkTkU3xVPfgYxNRusGVijEi',
      EXCHANGE_RATE: 2000,
      MIN_DONATION: 0.006,
      MAX_DONATION: 500,
      NAME: 'Bitcoin',
      UNIT: 'BTC',
      USD: '1200'
    },
    ETH: {
      ADDRESS: '1EJyXYXPRRiPkTkU3xVPfgYxNRusGVijEi',
      EXCHANGE_RATE: 20,
      MIN_DONATION: 1,
      MAX_DONATION: 50000,
      NAME: 'Ethereum',
      UNIT: 'ETH',
      USD: '19'
    }
  }
}

export default {
  state
}
