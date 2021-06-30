const request = require("node-superfetch");



class crypto{
    /**
     * 
     * @param {String} token 
     */
    constructor(token){
        if(!token) throw new TypeError("Token was not provided")

        this.token = token;
    }

    /**
     * @param {String} currency
     * @param {String} coin
     */

     async livedata(currency,data){

      try{
                

        const url = `http://api.coinlayer.com/live?access_key=${this.token}&target=${currency}&symbols=${data}&expand=1`
        

        const {body} = await request.get(url)



        const res = JSON.parse(JSON.stringify(body))


        const cryptoprice = res.rates
        

        const rates = JSON.parse(JSON.stringify(cryptoprice))

        const stats = rates[data.toUpperCase()]

        return stats;

      } catch(err){
          console.log(err)
          throw new TypeError("Not a valid currency or coin")
      }

     }
     async histdata(date,currency,crypto){
        const url = `http://api.coinlayer.com/${date}?access_key=${this.token}&target=${currency}&symbols=${crypto}&expand=1`

        const {body} = await request.get(url)


        const res = JSON.parse(JSON.stringify(body))

     
        const cryptoprice = res.rates

        const rates = JSON.parse(JSON.stringify(cryptoprice))

        const stats = rates[crypto.toUpperCase()]

  
        return stats
      
      
     }
}

module.exports = crypto;