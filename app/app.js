const os = require("os");
const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000; 
const host = '0.0.0.0';

const publicDirectory = path.join(__dirname, '/www/html/');

const hostname = os.hostname();

app.use(express.static(publicDirectory));

app.get('/hostname', (req, res) => {
  res.status(200).send(`<div>${hostname}</div>`);
})

app.get('/image', (req, res) => {
  res.status(200).sendFile(path.join(publicDirectory, 'image/index.html'));
})

app.get('/about', (req, res) => {
  res.status(200).sendFile(path.join(publicDirectory, 'about/index.html'));
})

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(publicDirectory, 'index.html'));
})

app.get('*', (req, res) => {
  res.status(404).send("This page doesn't exist");
});

const server = app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
});
for (let signal of ["SIGTERM", "SIGINT"])
	process.on(signal, () => {
		console.info(`${signal} signal received.`);
		console.log("Closing express server");
		server.close((err) => {
			console.log("Express server closed.");
			process.exit(err ? 1 : 0);
		});
	});
