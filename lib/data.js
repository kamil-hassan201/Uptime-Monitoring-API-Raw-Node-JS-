/*
 * Title: Library for file system
 * Description: library
 * Author: Kamil Hassan ( Personal )
 * Date: 0/01/2023
 *
 */

// module dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// base directory
lib.basedir = path.join(__dirname, '/../.data/');

// write data to a file
lib.create = (dir, file, data, callback) => {
    fs.open(`${lib.basedir}/${dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringifiedData = JSON.stringify(data);
            fs.writeFile(fileDescriptor, stringifiedData, (errW) => {
                if (!errW) {
                    fs.close(fileDescriptor, (errC) => {
                        if (!errC) {
                            callback(false);
                        } else {
                            callback('Unable to close the file!');
                        }
                    });
                } else {
                    callback('Unable to write on file!');
                }
            });
        } else {
            callback('Unable to create new file. May be the file exists already!');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir}/${dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

module.exports = lib;
