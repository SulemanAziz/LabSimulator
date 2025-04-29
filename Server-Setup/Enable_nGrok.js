const ngrok = require('@ngrok/ngrok');

ngrok.connect({ addr: 8080, authtoken_from_env: true }) //Make sure the port number set here matches the one in your EnableServer.cjs File.
	.then(listener => console.log(`Ingress established at: ${listener.url()}`));