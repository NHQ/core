var server = require('http').createServer()
	, domains = ['omegawd.com']
	,	x = Object.create(null)
;

domains.forEach(function(d){
	try {
		x[d] = require('./sites/' + d);
	}
	catch(e){
		console.log(e)
	}
});

server.on('request', function(req, res){
	try {
		x[req.headers.host](req, res)
	}
	catch(e){
		x[domains[0]](req, res);
	}
});

server.listen(2046)