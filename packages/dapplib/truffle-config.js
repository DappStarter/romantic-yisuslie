require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remove coffee inflict process swallow spread'; 
let testAccounts = [
"0xc941a6ecdde90d4a1d987260b1864b1778e8680ab9f75ff158a6ef3285c11e84",
"0xa454fa8ce6aee33d68b9d81722514f66cb9611618f16c47e941f43ff4109450c",
"0xf5297d6a8f540a045146483a11c6599ba3b63b7afeac151a8036e248ed084317",
"0x3a82f75f05a09459a786b75a780abe6a3394d9c2ddc97fa7f5df10f1b1492d11",
"0x2e2cecf6160144533cc401a14472b922ea9f4337f392f984d2abdb743abf4c3b",
"0x8b64d68f9ce0e0524fda158e71c9ffe6b5bd31281042b69f5c449d45b4fe624d",
"0xfebaa53eb431f933891a7aa21329519dcadff0bc07dccf7823f75f6f9e50696f",
"0xf2f0074873b133742d374f4c5c33ca7333aca0b266ba9f6c4000aa33d18cb73d",
"0x1bdc06fd6c0ec21ed407fe1b6b24cd68ca0b9793724b0298e5a719acd40da4b5",
"0x33b6b40988c3137612706deca33fe9ad12ec2b2b7c3b70f3246e18c926eef380"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
