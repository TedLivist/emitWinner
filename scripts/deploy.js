// contract address of the target contract
const ICONTRACT_ADDRESS = "0x890697B6bf90eA125D2Bc3B7B4F5AB2ec610C373";

// async function main() {
//   const Contract = await hre.ethers.getContractFactory("Contract")
//   const contract = await Contract.deploy(ICONTRACTADDRESS);

//   await contract.deployed();

//   console.log("contract deployed ", contract.address);
// }

const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.SEPOLIA_URL;

  let artifacts = await hre.artifacts.readArtifact("Contract");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let contract = await factory.deploy(ICONTRACT_ADDRESS);

  console.log("Contract address:", contract.address);

  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});