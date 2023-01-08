/*
 * Title: Environment File
 * Description: Environments
 * Author: Kamil Hassan ( Personal )
 * Date: 07/01/2023
 *
 */

// module dependencies

// module scaffolding
const environments = {};

environments.dev = {
    port: 3000,
    name: 'development',
};

environments.production = {
    port: 5000,
    name: 'staging',
};

// environment passed
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'dev';

const envToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.dev;

module.exports = envToExport;
