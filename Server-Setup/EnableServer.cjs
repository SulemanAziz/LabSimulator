const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 8080;

//Code below is from sqlite-gui-node: https://github.com/AzouKr/sqlite-gui-node to run the GUI for the DB

const express = require("express");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("Database/Login.db");

const { SqliteGuiNode } = require("sqlite-gui-node");

const app = express();

SqliteGuiNode(db,4500).catch((err) => {
  console.error("Error starting the GUI:", err);
});

app.listen(4000);

//DB GUI port is 4000

const server = http.createServer((req, res) => {
  // Set the file path based on the request URL
  let filePath = path.join(__dirname, '..', req.url === '/' ? 'index.html' : req.url);

  // Get the file extension to determine the content type
  const extname = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, serve a 404 page
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        // Other server errors
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      }
    } else {
      // Serve the file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});