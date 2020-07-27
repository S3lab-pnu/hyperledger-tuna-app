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
        		        // type your code...

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
        		        // type your code...

    		} catch (error) {
        		console.error(`Failed to submit transaction: ${error}`);
    		}
	},
	get_tuna: async function(req, res){
		var key = req.params.id

		try {
        		        // type your code...

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
        		        // type your code...

    		} catch (error) {
        		console.error(`Failed to submit transaction: ${error}`);
    		}
	}

}
})();
