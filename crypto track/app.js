var btc = document.getElementById("btc");
var bnb = document.getElementById("bnb");
var eth = document.getElementById("eth");
var avax = document.getElementById("avax");

let liveprice={
    "async":true,
    "scroosDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbinancecoin%2Cethereum%2Cdent&vs_currencies=usd",
    
    "method":"GET",
    "headers":{}

}

$.ajax(liveprice).done(function (response){
    console.log(response);
    btc.innerHTML = response.bitcoin.usd;
    bnb.innerHTML = response.binancecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    dent.innerHTML = response.dent.usd;


});