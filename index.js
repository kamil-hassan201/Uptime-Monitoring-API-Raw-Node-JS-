/*
    project: Uptime Monitoring API
    description: This is a practice project for learning backend.
*/

const http = require('http');
const data = require('./lib/data');

const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
// module scaffolding
const app = {};

// create server function
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(environment.port, () = > {
        console.log('listening to port ', environment.port);
        data.read('test', 'newFile', (err, d) => {
            console.log(err, d);
        });
    });
};

// handle request and response

app.createServer();
