
/**
 * SMS Controller  => SMS trong controller - Api esms - free5k
 */

let request = require('request');
let config  = require('../config/sms');

let sendOTP = function(phone, otp){  // hàm g?i otp


request('http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get?Phone='+phone+'&ApiKey='+config.Api_Key+'&SecretKey='+config.Api_Secret+'&Content=REDWIN OTP: '+otp+'&SmsType=8', function (err, res, body) {
    //n?u có l?i
    if (err)
        throw err;
    //in ra header
    //console.log(res);
    //in ra body nh?n du?c
    //console.log(body);
    console.log('Send Code: '+otp+' => '+phone);
});


// exxport module
}

module.exports = {
	sendOTP: sendOTP,
}
