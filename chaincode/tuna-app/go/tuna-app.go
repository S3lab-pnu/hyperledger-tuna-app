/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package main

import (
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type SmartContract struct {
	contractapi.Contract
}

type Tuna struct {
	Vessel string `json:"vessel"`
	Timestamp string `json:"timestamp"`
	Location  string `json:"location"`
	Holder  string `json:"holder"`
}

type QueryResult struct {
	Key    string `json:"Key"`
	Record *Tuna
}

func (s *SmartContract) InitLedger(ctx contractapi.TransactionContextInterface) error {
	tunas := []Tuna{
		Tuna{Vessel: "923F", Location: "67.0006, -70.5476", Timestamp: "1504054225", Holder: "Miriam"},
		Tuna{Vessel: "M83T", Location: "91.2395, -49.4594", Timestamp: "1504057825", Holder: "Dave"},
		Tuna{Vessel: "T012", Location: "58.0148, 59.01391", Timestamp: "1493517025", Holder: "Igor"},
		Tuna{Vessel: "P490", Location: "-45.0945, 0.7949", Timestamp: "1496105425", Holder: "Amalea"},
		Tuna{Vessel: "S439", Location: "-107.6043, 19.5003", Timestamp: "1493512301", Holder: "Rafa"},
		Tuna{Vessel: "J205", Location: "-155.2304, -15.8723", Timestamp: "1494117101", Holder: "Shen"},
		Tuna{Vessel: "S22L", Location: "103.8842, 22.1277", Timestamp: "1496104301", Holder: "Leila"},
		Tuna{Vessel: "EI89", Location: "-132.3207, -34.0983", Timestamp: "1485066691", Holder: "Yuan"},
		Tuna{Vessel: "129R", Location: "153.0054, 12.6429", Timestamp: "1485153091", Holder: "Carlo"},
		Tuna{Vessel: "49W4", Location: "51.9435, 8.2735", Timestamp: "1487745091", Holder: "Fatima"},
	}

	// type your code...

	return nil
}

func (s *SmartContract) CatchTuna(ctx contractapi.TransactionContextInterface, tunaNumber string, vessel string, location string, timestamp string, holder string) error {
	// type your code...
}

func (s *SmartContract) QueryTuna(ctx contractapi.TransactionContextInterface, tunaNumber string) (*Tuna, error) {
	// type your code...
}

func (s *SmartContract) QueryAllTunas(ctx contractapi.TransactionContextInterface) ([]QueryResult, error) {
	// type your code...
}

func (s *SmartContract) ChangeTunaHolder(ctx contractapi.TransactionContextInterface, tunaNumber string, newHolder string) error {
	// type your code...
}

func main() {

	chaincode, err := contractapi.NewChaincode(new(SmartContract))

	if err != nil {
		fmt.Printf("Error create tuna-app chaincode: %s", err.Error())
		return
	}

	if err := chaincode.Start(); err != nil {
		fmt.Printf("Error starting tuna-app chaincode: %s", err.Error())
	}
}
