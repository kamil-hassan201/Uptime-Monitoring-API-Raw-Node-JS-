/*
    project: Uptime Monitoring API
    description: This is a practice project for learning backend.
*/

const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
// module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

//create server function
app.createServer = () => {
  const server = http.createServer(handleReqRes);
  server.listen(app.config.port, () => {
    console.log("listening to port ", app.config.port);
  });
};

// handle request and response

app.createServer();
