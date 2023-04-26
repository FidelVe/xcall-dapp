PWD = $(abspath ./)

GRADLE = ./gradlew

HARDHAT = npx hardhat
TS_NODE = npx ts-node
NETWORK = --network bscTestnet
SOLIDITY_CONTRACTS = ./solidity/contracts

.DEFAULT_GOAL := all
all:
	@echo $(PWD)

.PHONY: build clean deploy

deploy-dapp:
	@ echo ">>> Deploy DApp contracts" ; \
	E2E_DEMO_PATH=$(PWD) \
	$(HARDHAT) $(NETWORK) run scripts/deploy_dapp.ts

deploy-all: deploy-dapp

run-demo:
	@ echo ">>> Run demo_dapp.ts " ; \
	E2E_DEMO_PATH=$(PWD) \
	$(HARDHAT) $(NETWORK) run scripts/demo_dapp.ts
