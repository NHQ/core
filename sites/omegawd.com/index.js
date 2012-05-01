var connect = require('connect')
	,	Session = require('connect-redis')(connect)
	,	server = connect()
	, users = {}
;
console.log(connect.static.mime)
server.use(connect.logger('dev'))
			.use(connect.bodyParser())
			.use(connect.cookieParser('keyboard cat'))
			.use(connect.session({ store: new Session, secret: 'keyboard cat' }))
			.use(function(req, res){
					console.log(req.session.id);
			    res.end('hello world\n');
			  });	

module.exports = server