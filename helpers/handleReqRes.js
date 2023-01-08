/*
 * Title: Handle Request and Response
 * Description:
 * Author: Kamil Hassan ( Personal )
 * Date: 06/01/2023
 *
 */

// module dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('./routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFound');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const queryStringObject = parsedUrl.query;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const { headers } = req;

    const requestedProperties = {
        parsedUrl,
        path,
        queryStringObject,
        trimmedPath,
        method,
        headers,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (chunk) => {
        realData += decoder.write(chunk);
    });
    req.on('end', () => {
        realData += decoder.end();
        chosenHandler(requestedProperties, (_statusCode, _payload) => {
            const statusCode = typeof _statusCode === 'number' ? _statusCode : 500;
            const payload = typeof _payload === 'object' ? _payload : {};
            const payloadString = JSON.stringify(payload);

            res.writeHead(statusCode);
            res.end(payloadString);
        });
        console.log(realData);
    });
};

module.exports = handler;
