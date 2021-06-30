## A node wrapper for the CoinLayer Crypto API.

### Existing Methods:
* livedata(currency,crypto) - Returns Live Cryptocurrency Data
* histdata(data, currency, crypto) - Returns Historical Data from 2011 - Date Given
### Setup:

```javascript
const crypto = require('coinlayer-wrapper')
const coin = new crypto(token)
//You can get your API Token from https://coinlayer.com
```



### Simple Example:
```js
const crypto = require('coinlayer-wrapper')
const coin = new crypto(token)

const cur = 'usd';
const cryp = 'btc';
const data = coin.livedata(cur, cryp)

console.log(data)
//Sends an object with the live cryptocurrency

/*{
  rate: 32806.429893,
  high: 36557.84,
  low: 31583.7,
  vol: 247761373.242442,
  cap: 614565508506.3904,
  sup: 18733081,
  change: -2906.1135490000015,
  change_pct: -8.137514914667895
}




```
### Historical Data Example
```js

const date = '2018-04-29'
const cur = 'usd';
const cryp = 'btc';
const data = coin.histdata(date,cur, cryp)

console.log(data)


```
```
List of all available country currencies: https://coinlayer.com/target

List of all available crypto currencies: https://coinlayer.com/symbols

```

###Quick Note:
If you get a socket error, it's on the API side,it has been going on and off, so just keep that in mind




