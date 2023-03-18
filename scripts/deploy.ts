import { ethers } from "hardhat";

async function main() {
  const MintimeContract = await ethers.getContractFactory("Mintime");
  const mintime = await MintimeContract.deploy();
  await mintime.deployed();
  console.log("mintime contract deployed:", mintime.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
