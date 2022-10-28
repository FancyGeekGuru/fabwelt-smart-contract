/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    rinkeby: {
      url: 'https://speedy-nodes-nyc.moralis.io/441306a9723f6b96e890cd81/eth/rinkeby',
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mumbai: {
      url: "https://speedy-nodes-nyc.moralis.io/441306a9723f6b96e890cd81/polygon/mumbai",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bnb: {
      url: "https://speedy-nodes-nyc.moralis.io/441306a9723f6b96e890cd81/bsc/testnet",
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
}
