//SPDX-License-Identifier: Apache-2.0

/*
  This code is based on code written by the Hyperledger Fabric community.
  Original code can be found here: https://github.com/hyperledger/fabric-samples/blob/release/fabcar/query.js
  and https://github.com/hyperledger/fabric-samples/blob/release/fabcar/invoke.js
 */

// call the packages we need
var express       = require('express');        // call express
var app           = express();                 // define our app using express
var bodyParser    = require('body-parser');
var http          = require('http')
var fs            = require('fs');
const { Gateway, Wallets } = require('fabric-network');
//var Fabric_Client = require('fabric-client');
var path          = require('path');
var util          = require('util');
var os            = require('os');

module.exports = (function() {
return{
	get_all_tuna: async function(req, res){
		console.log("getting all tuna from database: ");
		try {
        		const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');
        		const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        		const walletPath = path.join(process.cwd(), 'wallet');
        		const wallet = await Wallets.newFileSystemWallet(walletPath);
        		console.log(`Wallet path: ${walletPath}`);

        		const identity = await wallet.get('user1');
        		if (!identity) {
           			console.log('An identity for the user "user1" does not exist in the wallet');
            			console.log('Run the registerUser.js application before retrying');
            			return;
        		}

        		const gateway = new Gateway();
        		await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        		const network = await gateway.getNetwork('mychannel');

        		const contract = network.getContract('tuna-app');

        		const result = await contract.evaluateTransaction('queryAllTunas');
        		console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
				res.json(JSON.parse(result.toString()));

    		} catch (error) {
        		console.error(`Failed to evaluate transaction: ${error}`);
    		}	
	},
	add_tuna: async function(req, res){
		var array = req.params.tuna.split("-");
		console.log(array);

		var key = array[0]
		var timestamp = array[2]
		var location = array[1]
		var vessel = array[4]
		var holder = array[3]


		try {
        		const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');
        		let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        		const walletPath = path.join(process.cwd(), 'wallet');
        		const wallet = await Wallets.newFileSystemWallet(walletPath);
        		console.log(`Wallet path: ${walletPath}`);

        		const identity = await wallet.get('user1');
        		if (!identity) {
            			console.log('An identity for the user "user1" does not exist in the wallet');
            			console.log('Run the registerUser.js application before retrying');
            			return;
        		}

        		const gateway = new Gateway();
        		await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        		const network = await gateway.getNetwork('mychannel');

        		const contract = network.getContract('tuna-app');

        		const result = await contract.submitTransaction('CatchTuna', key, vessel, location, timestamp, holder);		console.log(result.toString())
       			 console.log('Transaction has been submitted');

        		await gateway.disconnect();
			res.send("OK");

    		} catch (error) {
        		console.error(`Failed to submit transaction: ${error}`);
    		}
	},
	get_tuna: async function(req, res){
		var key = req.params.id

		try {
        		const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');
        		const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        		const walletPath = path.join(process.cwd(), 'wallet');
        		const wallet = await Wallets.newFileSystemWallet(walletPath);
        		console.log(`Wallet path: ${walletPath}`);

        		const identity = await wallet.get('user1');
        		if (!identity) {
           			console.log('An identity for the user "user1" does not exist in the wallet');
            			console.log('Run the registerUser.js application before retrying');
            			return;
        		}

        		const gateway = new Gateway();
        		await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        		const network = await gateway.getNetwork('mychannel');

        		const contract = network.getContract('tuna-app');

        		const result = await contract.evaluateTransaction('queryTuna', key);
        		console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
				res.json(JSON.parse(result.toString()));

    		} catch (error) {
        		console.error(`Failed to evaluate transaction: ${error}`);
    		}
		
	},
	change_holder: async function(req, res){

		console.log("changing holder of tuna catch: ");
		
		var array = req.params.holder.split("-");
console.log(array);
		var key = array[0]
		var holder = array[1];
		try {
        		const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');
        		let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        		const walletPath = path.join(process.cwd(), 'wallet');
        		const wallet = await Wallets.newFileSystemWallet(walletPath);
        		console.log(`Wallet path: ${walletPath}`);

        		const identity = await wallet.get('user1');
        		if (!identity) {
            			console.log('An identity for the user "user1" does not exist in the wallet');
            			console.log('Run the registerUser.js application before retrying');
            			return;
        		}

        		const gateway = new Gateway();
        		await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        		const network = await gateway.getNetwork('mychannel');

        		const contract = network.getContract('tuna-app');

        		const result = await contract.submitTransaction('ChangeTunaHolder', key, holder);		console.log(result.toString())
       			 console.log('Transaction has been submitted');

        		await gateway.disconnect();
			res.send("OK");

    		} catch (error) {
        		console.error(`Failed to submit transaction: ${error}`);
    		}
	}

}
})();
