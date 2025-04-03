require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 43113,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 43114,
    },
  }
};
