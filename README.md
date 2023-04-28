# xcall-dapp (icon <--> bsc and icon <--> eth)

## Prerequisites

* `git clone https://github.com/FidelVe/xcall-dapp.git`
* `npm install`
* `npm run start`

## How to use

This app can run test communicating with xcall between ICON<->BSC and ICON<->ETH on testnet. The following is necessary to succesfully run the app.

* Place a keystore file of an ICON wallet in the `wallet` folder at root and name the file `keystore.json`.
* Place a env file at root (`/.env`) and add 2 params, one named `PK1` this is the private key of an evm compatible wallet that is going to be used for both BSC and ETH networks, and the other named `PW2` this is the password for the keystore file wallet for the ICON Chain. Make sure you have enough native token balance on the wallets to pay the transaction fees.

Two commands are present on the `package.json` file for running the dapp either on ICON<->BSC or ICON<->ETH:
* `npm run start-bsc`
* `npm run start-eth`

Edit the `script/demo-app.ts` file and edit the variable at line 11 named `networkSelector`, put `bsc` if you are running the dapp against the ICON<->BSC testnet or put `eth` if you are running it against the ICON<->ETH testnet.
