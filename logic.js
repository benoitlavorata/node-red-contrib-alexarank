const alexa = require('alexarank');
const onMessage = async (msg) => {
        return new Promise(res => {
                alexa(msg.payload, function (error, result) {
                        if (!error) {
                                res(result);
                                return false;
                        } else {
                                throw new Error(error);
                        }
                });
        })
}
module.exports = {
        onMessage: onMessage
}