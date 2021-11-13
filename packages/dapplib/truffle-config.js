require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note ranch come install clock blue summer'; 
let testAccounts = [
"0x2238279c00078dfcfcc709f70f2bb0dac3f4d6d187c753dd0f53cedefbc63bba",
"0x10e3b3abb2fc27aa130adefa717a352d12669984a0dd2f9c84890640b128082b",
"0x8b62a84f6a58f436b0576c5302064461a24cd9debc343e3f5e7c1f2bebc4fe69",
"0x591c23d709afced8fc6a69bdd7bbfd44612ed60c7aa1d568a251e97826edf2c1",
"0x14ac9068cfa33df7367c1eacf7090adc6598440f67b42c9060edcf17a77075f3",
"0x137141661cb618701a41e4c81f311af3485363b6899daecf88837b57809f122c",
"0x26cd81610bc7ee712d5bfe11cde4c68d91ecf5adaa5bbd39398bc51bac76c85b",
"0x98a3ea0d071abe0eedd1e93b2fed150db2b80abe16789ce4d87e89c1936ed7b2",
"0x6b87afddcf47e39270b3b7b1b8fe00705dc55896c78ddcc9c884086abbcb759b",
"0x9c42921cb356ea1ca1249184a47dcdb46e96e1275ed358bc70acc887be85b7df"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

