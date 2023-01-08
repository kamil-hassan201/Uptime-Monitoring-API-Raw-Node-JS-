/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Kamil Hassan ( Personal )
 * Date: 06/01/2023
 *
 */

// module dependencies

// module scaffolding
const handler = {};

handler.sampleHandler = (requiredProperties, callback) => {
    callback(200, {
        message: 'This is a message',
    });
};

module.exports = handler;
