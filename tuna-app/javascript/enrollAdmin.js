/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const FabricCAServices = require('fabric-ca-client');
const { Wallets } = require('fabric-network');
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

        // Check to see if we've already enrolled the admin user.
        // type your code...
        
        // Enroll the admin user, and import the new identity into the wallet.
        // type your code...
        
        console.log('Successfully enrolled admin user "admin" and imported it into the wallet');

    } catch (error) {
        console.error(`Failed to enroll admin user "admin": ${error}`);
        process.exit(1);
    }
}

main();
