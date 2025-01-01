const hre = require("hardhat");

const CONTRACT_ADDRESS = "0x17A850F2753FB848AC16284f66846dB3b4dbB74E"

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS);

  const tx = await contract.attemptCall();

  console.log(await tx.wait());

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});