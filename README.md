# dexon-dapp-test-project
DEXON Test Project
node version v.10.13.0
my npm version is 6.4.1

When project is clone from git
$ cp ./secret.js.sample ./secret.js 
$ vim ./secret.js
and set variables in ./secret.js

# clean built files
$ npm run clean  

# setup and build
$ npm install  

$ npm run compile  

$ npm run build:webapp  

# deploy smart contract
## deploy for internal testing
### run ganache rpc server as local simulated blockchain
$ npm run rpc 
### migrate to development environment
$ npm run migrate:development

## deploy for read blockchain in testnet
$ npm run migrate:testnet

# execute web
After smart contract is on blockchain   
$ npm run exec  

