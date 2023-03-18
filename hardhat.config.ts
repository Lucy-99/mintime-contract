import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url:'https://goerli.infura.io/v3/3a2b126791f9443b86942c283bd16b32',
      accounts:['77fa4fca186aae264a7bfdef42887946f6179bc5ab39c5a3e227e8a73380b377']
    }
  },
  etherscan:{
    apiKey:"6CSPF1WDXY68VK38FW5FG6KZUFZTXE7IT4"
  }
};

export default config;
