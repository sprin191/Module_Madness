var http = require('http');
var exportfiles = require('./modules/exports');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(exportfiles.b() + exportfiles.e());
  res.end();
}).listen(3000);

console.log('listening on port 3000');
