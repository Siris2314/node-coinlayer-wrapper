const crypto = require('./library/crypto')

function start(token){
    return new crypto(token);
}

module.exports = start
