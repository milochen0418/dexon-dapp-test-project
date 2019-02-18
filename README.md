# dexon-dapp-test-project
DEXON Test Project  
node version v.10.13.0  . my npm version is 6.4.1  
# You must setup secret.js by yourself after clone. 
When project is clone from git  
$ cp ./secret.js.sample ./secret.js   
$ vim ./secret.js  
and set variables in ./secret.js  

# Easy Usgae
## run dApp for Dexon testnet from zero
### one command to execute all process
$ npm run reboot  

In the final, the terminal will show you port number.  we assume it is 8080  
open browser http://yourhost:8080  


## run dApp for your personal testnet from zero
### Setup your myTestnet
You can find the string dexon.pieapple.com in above two file
./app/app.js  
./truffle-config.js  
Just replace dexon.pieapple.com into your host name

### Build and run project in your myTestnet
#### run rpc to simulate your myTestnet
In Terminal 1   
$ npm run rpc  
#### one command to execute all process 
In Terminal 2  
$ npm run reboot-mytestnet  

In the final, the terminal will show you port number.  we assume it is 8080  
open browser http://yourhost:8080  


# Thanks
Thanks the helps and knowledge sharing from [@dexon-foundation](https://github.com/dexon-foundation), [@cyriacr](https://github.com/cyriacr) and [@CHAOWEICHIU](https://github.com/CHAOWEICHIU).

# Another details

## clean built files
$ npm run clean  

## setup and build
$ npm install  

$ npm run compile  

$ npm run build:webapp  

## deploy smart contract
### deploy for internal testing
#### run ganache rpc server as local simulated blockchain
$ npm run rpc  
#### migrate to development environment
$ npm run migrate:development  

### deploy for read blockchain in testnet
$ npm run migrate:testnet  

## execute web
After smart contract is on blockchain     
$ npm run exec    
TO make sure youa have http-server   
$ which http-server    
If you don't have it, do it    
$ sudo npm install -g http-server   

## Clean all and run all steps  
$ npm run reboot

## Reference information
Talk about what happen in Migration of truffle
https://blog.csdn.net/myNameIssls/article/details/79158646
