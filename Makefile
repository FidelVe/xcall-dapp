PWD = $(abspath ./)

GRADLE = ./gradlew

HARDHAT = npx hardhat
TS_NODE = npx ts-node
NETWORK_BSC = --network bscTestnet
NETWORK_ETH = --network hardhat2
SOLIDITY_CONTRACTS = ./solidity/contracts

.DEFAULT_GOAL := all
all:
	@echo $(PWD)

.PHONY: build clean deploy

run-demo-bsc:
	@ echo ">>> Run demo_dapp.ts " ; \
	E2E_DEMO_PATH=$(PWD) \
	$(HARDHAT) $(NETWORK_BSC) run scripts/demo_dapp.ts

run-demo-eth:
	@ echo ">>> Run demo_dapp.ts " ; \
	E2E_DEMO_PATH=$(PWD) \
	$(HARDHAT) $(NETWORK_ETH) run scripts/demo_dapp.ts
