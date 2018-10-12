const http = require('http');
const port = 8080;
const host = "127.0.0.1";
const fs = require('fs');

const serv = http.createServer((req, res) => {

	res.writeHead(200,{'content-Type': 'text/html'});
	fs.readFile('./h.html',null, (error , data) => {
		if(error){
			res.write("an error was occurated : "+error);
			res.end();

		}else{
			res.write(data);
			res.end();
		}
		res.end();
	});
	res.end();
});

serv.listen(port , host , (error) => {
	
	if(error){
		console.log('an error was occurated while lanching the server');
	}else{
	console.log(`server started at http://${host}:${port}`);
	}

});
