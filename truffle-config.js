
var HDWalletProvider = require("truffle-hdwallet-provider");
const secret = require('./secret')
const mnemonic = secret.mnemonic;
const privkey = secret.privkey;
var privProvider = new HDWalletProvider(privkey, "http://testnet.dexon.org:8545");

module.exports = {
  networks: {
    development: {
      provider: new HDWalletProvider(
        mnemonic,
	
        "http://127.0.0.1:8545",
        0,
        1,
        true,
        "m/44'/237'/0'/0/",
      ),
      network_id: "*",
      host: "localhost",
      port: 8545,
    },
    /**
      DEXON Testnet
    */
	/*
    dexonTestnet: {
      provider: () => (
	      privProvider
      ),
      network_id: "*",
    },
	 */
	dexonTestnet: {
      provider: () => (
        new HDWalletProvider(
          mnemonic,
          'http://testnet.dexon.org:8545',
          0,
          1,
          true,
          "m/44'/237'/0'/0/"
        )
      ),
      network_id: "*",
	},


	myTestnet: {
		provider: () => (
			new HDWalletProvider(
				mnemonic,
				"http://dexon.pieapple.com:8545",
				0,
				1,
				true,
				"m/44'/237'/0'/0/"
			)
		),
		network_id: "*",
	},



  }
};
