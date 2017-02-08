/**
 * 
 */
var http = require("http");
http.createServer(function(req,rpo)
{
	rpo.writeHead(200,{'Content-Type': 'text/plain'});
	rpo.end("http server created");
}).listen(8081);

/* Blocking code 
var fs= require("fs");
var data =fs.readFileSync('input.txt');
console.log(data.toString());
console.log("program ended"); */


/* Unblocking code 
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
}); */



//<<<<<<< HEAD

//=======
console.log("Again check fetch and merge ");
//>>>>>>> branch 'master' of https://github.com/santoshusr/divyarepos.git

console.log('Server running at http://127.0.0.1:8081/');
