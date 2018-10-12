const http = require('http');
const port = 8080;
const host = "127.0.0.1";
const fs = require('fs');

const serv = http.createServer((req, res) => {

	res.writeHead(200,{'content-Type': 'text/html'});
	res.write("");
	fs.readFile('./hd.html',null, (error , data) => {
		if(error){
			res.write(""+error);
			res.end();

		}else{

			res.write(data);
			
		}
		res.end();
	});

});

serv.listen(port , host , () => {

	console.log(`server started http://${host}:${port}`);

});