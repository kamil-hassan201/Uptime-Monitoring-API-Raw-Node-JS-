/*
 * Title: Not Found
 * Description: Not Found Handler
 * Author: Kamil Hassan ( Personal )
 * Date: 06/01/2023
 *
 */

// module dependencies

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestedProperties, callback) => {
  callback(404, {
    message: "Requested url not found!",
  });
};

module.exports = handler;
