# LabSimulator

WebApp Project to Simulate Practical Lab experiments, includes local hosting and Sqlite database, managed through the frontend with WebAssembly.

Visit site at https://sulemanaziz.github.io/LabSimulator

##  Setup

Make sure [NodeJS](https://nodejs.org/en/download) is installed and run:

node install

Once everything is installed, go to /Server-Setup and run:

node EnableServer.js

This will initialize the server on localhost:8080.
Database GUI will be on localhost:4500/home.

As mentioned in the terminal.

To host on the Internet, run the [Ngrok](https://dashboard.ngrok.com/get-started/setup/nodejs) auth command:

NGROK_AUTHTOKEN=(Your Auth Token) node Enable_nGrok.js

