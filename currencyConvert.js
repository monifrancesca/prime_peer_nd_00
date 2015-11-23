//The second module should accept a number and convert it to a USD value 
//(Hint: you will want to Google examples of this. I found a couple reasonable 
//examples of this in a simple 5 minute search).

var currencyConvert = function currencyFormat (num) {
   return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

//console.log(currencyFormat)

module.exports = currencyConvert;