// Finally, in the app.js, do the standard stuff. Start a server, require what else is needed, set the port. 
//When the server is curled, it should produce the result of third module.

var http = require('http');

var accountBalance = require('./showAccountBalance.js');
//module.exports = showAccountsBalance;

//var fs = require('fs');

var server = http.createServer(function(request, response) {
	response.writeHead(200);
  response.write(accountBalance());
  response.end();
	
});

server.listen(3000);