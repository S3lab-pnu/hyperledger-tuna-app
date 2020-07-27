/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const fs = require('fs');
const path = require('path');

async function main() {
    try {
        // load the network configuration
        // type your code...

        // Create a new CA client for interacting with the CA.
        // type your code...

        // Create a new file system based wallet for managing identities.
        // type your code...

        // Check to see if we've already enrolled the user.
        // type your code...

        // Check to see if we've already enrolled the admin user.
        // type your code...

        // build a user object for authenticating with the CA
        // type your code...

        // Register the user, enroll the user, and import the new identity into the wallet.
        // type your code...

    } catch (error) {
        console.error(`Failed to register user "user1": ${error}`);
        process.exit(1);
    }
}

main();
