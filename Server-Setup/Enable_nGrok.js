const http = require('http');
const ngrok = require('@ngrok/ngrok');
// Create webserver
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('Congrats you have created an ngrok web server');
}).listen(8080, () => console.log('Node.js web server at 8080 is running...'));

ngrok.connect({ addr: 8080, authtoken_from_env: true }) //Make sure the port number set here matches the one in your EnableServer.cjs File.
	.then(listener => console.log(`Ingress established at: ${listener.url()}`));